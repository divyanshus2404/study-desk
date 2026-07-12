// Lightweight "students studying now" pulse.
// Returns a plausible count based on time of day + small random jitter.
// No database needed — gives a warm social-presence feel without tracking anyone.

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed.' });
  }

  const hour = new Date().getUTCHours();
  // IST peak study hours: 8am-12pm (UTC 2:30-6:30) and 7pm-12am (UTC 13:30-18:30)
  const istHour = (hour + 5) % 24;
  let base;
  if (istHour >= 8 && istHour <= 12) base = 40;
  else if (istHour >= 19 && istHour <= 23) base = 55;
  else if (istHour >= 13 && istHour <= 18) base = 25;
  else base = 10;

  const jitter = Math.floor(Math.random() * 15) - 7;
  const count = Math.max(3, base + jitter);

  res.setHeader('Cache-Control', 'no-store');
  return res.status(200).json({ count });
};
