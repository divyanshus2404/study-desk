// Create a Razorpay order for a donation.
// Same pattern as BlueBottleCap: REST API directly (no SDK dependency),
// server is the source of truth for the final amount (clamped), and
// credentials only ever live in env vars.

const MIN_RUPEES = 10;
const MAX_RUPEES = 50000;

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed.' });
  }

  const keyId = process.env.RAZORPAY_KEY_ID;
  const keySecret = process.env.RAZORPAY_KEY_SECRET;
  if (!keyId || !keySecret) {
    return res.status(503).json({ error: 'Payment service is not configured. Contact support.' });
  }

  try {
    const { amount } = req.body || {};
    const rupees = Number(amount);
    if (!Number.isFinite(rupees) || rupees < MIN_RUPEES || rupees > MAX_RUPEES) {
      return res.status(400).json({ error: `Donation must be between ₹${MIN_RUPEES} and ₹${MAX_RUPEES.toLocaleString('en-IN')}.` });
    }

    const auth = Buffer.from(`${keyId}:${keySecret}`).toString('base64');
    const resp = await fetch('https://api.razorpay.com/v1/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Basic ${auth}`,
      },
      body: JSON.stringify({
        amount: Math.round(rupees * 100), // paise, integer
        currency: 'INR',
        receipt: `sd_${Date.now()}`,
        notes: { purpose: 'Study Desk donation' },
      }),
    });

    if (!resp.ok) {
      const detail = await resp.text();
      console.error('[create-order] Razorpay error:', resp.status, detail);
      return res.status(502).json({ error: 'Failed to create payment order.' });
    }

    const order = await resp.json();
    return res.status(200).json({ order, key_id: keyId });
  } catch (err) {
    console.error('[create-order]', err);
    return res.status(500).json({ error: 'Failed to create payment order.' });
  }
};
