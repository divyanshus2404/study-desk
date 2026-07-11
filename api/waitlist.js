export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { firstName, lastName, email, expectations, suggestions, source } = req.body;

  if (!email) {
    return res.status(400).json({ error: 'Email is required' });
  }

  const RESEND_API_KEY = process.env.RESEND_API_KEY;

  if (!RESEND_API_KEY) {
    console.error('RESEND_API_KEY is not configured in Vercel Environment Variables.');
    return res.status(500).json({ error: 'Server misconfiguration' });
  }

  const adminHtmlContent = `
    <h2>New Waitlist Signup: ${source || 'Study Desk'}</h2>
    <p><strong>Name:</strong> ${firstName || ''} ${lastName || ''}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Expectations:</strong><br/> ${expectations || 'N/A'}</p>
    <p><strong>Suggestions:</strong><br/> ${suggestions || 'N/A'}</p>
  `;

  // Cute, positive auto-reply with an animated GIF
  const userHtmlContent = `
    <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; text-align: center; color: #333;">
      <h1 style="color: #2A5CF6;">You're on the list! 🎉</h1>
      <p style="font-size: 16px; line-height: 1.5;">Hi ${firstName || 'there'},</p>
      <p style="font-size: 16px; line-height: 1.5;">Thank you so much for joining the <strong>Study Desk</strong> waitlist! We are working hard to build the most amazing study experience, and we can't wait to share it with you soon.</p>
      <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExM3Q1cG9kM2s2bTh5dHFtbTJ5cDUycXN2ZzFjM3Z2bzF4Nno0aHkzYiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/c76IJLufpNwShtLjqw/giphy.gif" alt="Cute happy animation" style="width: 100%; max-width: 300px; border-radius: 12px; margin: 24px 0;" />
      <p style="font-size: 16px; line-height: 1.5;">Keep an eye on this inbox. We'll let you know the moment you have early access!</p>
      <p style="font-size: 14px; color: #888; margin-top: 32px;">Stay awesome,<br/>The Study Desk Team</p>
    </div>
  `;

  try {
    // Fire both emails concurrently
    const [adminRes, userRes] = await Promise.all([
      // 1. Notification to you (Admin)
      fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${RESEND_API_KEY}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          from: 'Waitlist Bot <onboarding@resend.dev>',
          to: 'divyanshus2404@gmail.com',
          subject: `New Waitlist Signup: ${source || 'Study Desk'}`,
          html: adminHtmlContent,
        })
      }),
      
      // 2. Auto-reply to the User
      fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${RESEND_API_KEY}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          from: 'Study Desk <hello@bluebottlecap.com>',
          to: email,
          subject: "🎉 You're on the Study Desk waitlist!",
          html: userHtmlContent,
        })
      })
    ]);

    const adminData = await adminRes.json();
    const userData = await userRes.json();

    if (adminRes.ok && userRes.ok) {
      return res.status(200).json({ success: true, message: 'Emails sent successfully' });
    } else {
      console.error('Resend Error Admin:', adminData);
      console.error('Resend Error User:', userData);
      return res.status(400).json({ error: 'Failed to send one or more emails' });
    }
  } catch (error) {
    console.error('Error sending emails:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
