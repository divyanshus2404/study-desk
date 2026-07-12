// AI study helper — generates flashcards, summaries, practice questions.
// Uses Claude API with per-device rate limiting (checked client-side via localStorage).

const MAX_INPUT = 4500;

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed.' });
  }

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return res.status(503).json({ error: 'AI service is not configured yet. Check back soon!' });
  }

  try {
    const { prompt, mode } = req.body || {};
    if (!prompt || typeof prompt !== 'string') {
      return res.status(400).json({ error: 'No content provided.' });
    }

    const trimmed = prompt.substring(0, MAX_INPUT);

    const resp = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: 'claude-haiku-4-5-20251001',
        max_tokens: 1024,
        messages: [{ role: 'user', content: trimmed }],
      }),
    });

    if (!resp.ok) {
      const detail = await resp.text();
      console.error('[ai] Anthropic error:', resp.status, detail);
      return res.status(502).json({ error: 'AI service temporarily unavailable.' });
    }

    const data = await resp.json();
    const result = data.content?.[0]?.text || '';

    return res.status(200).json({ result });
  } catch (err) {
    console.error('[ai]', err);
    return res.status(500).json({ error: 'AI request failed. Please try again.' });
  }
};
