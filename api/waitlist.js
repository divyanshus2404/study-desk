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

  const htmlContent = `
    <h2>New Waitlist Signup: ${source || 'Study Desk'}</h2>
    <p><strong>Name:</strong> ${firstName || ''} ${lastName || ''}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Expectations:</strong><br/> ${expectations || 'N/A'}</p>
    <p><strong>Suggestions:</strong><br/> ${suggestions || 'N/A'}</p>
  `;

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from: 'Study Desk Waitlist <onboarding@resend.dev>',
        to: 'divyanshus2404@gmail.com',
        subject: `New Waitlist Signup: ${source || 'Study Desk'}`,
        html: htmlContent,
      })
    });

    const data = await response.json();

    if (response.ok) {
      return res.status(200).json({ success: true, message: 'Email sent successfully' });
    } else {
      console.error('Resend Error:', data);
      return res.status(400).json({ error: data.message || 'Failed to send email' });
    }
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
