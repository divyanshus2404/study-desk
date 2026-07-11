export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { email, idea, details } = req.body;

  if (!idea) {
    return res.status(400).json({ error: 'Idea is required' });
  }

  const RESEND_API_KEY = process.env.RESEND_API_KEY;

  if (!RESEND_API_KEY) {
    console.error('RESEND_API_KEY is not configured');
    return res.status(500).json({ error: 'Server misconfiguration' });
  }

  const htmlContent = `
    <h2>New Feature Request for Study Desk!</h2>
    <p><strong>From:</strong> ${email || 'Anonymous'}</p>
    <p><strong>Idea:</strong> ${idea}</p>
    <p><strong>Details:</strong><br/> ${details || 'None provided'}</p>
    <hr/>
    <p><small>To approve this feature and show it on the website, you will need to add it manually to the index.html Roadmap section.</small></p>
  `;

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from: 'Feature Bot <onboarding@resend.dev>',
        to: 'divyanshus2404@gmail.com',
        subject: `💡 New Feature Idea: ${idea}`,
        html: htmlContent,
      })
    });

    const data = await response.json();

    if (response.ok) {
      return res.status(200).json({ success: true, message: 'Feature request sent successfully' });
    } else {
      console.error('Resend Error:', data);
      return res.status(400).json({ error: data.message || 'Failed to send feature request' });
    }
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
