// Verify the Razorpay Checkout signature.
// Razorpay spec: HMAC-SHA256(order_id + "|" + payment_id, key_secret)
// Timing-safe comparison, same as BlueBottleCap's verifyPaymentSignature.

const crypto = require('crypto');

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed.' });
  }

  const secret = process.env.RAZORPAY_KEY_SECRET;
  if (!secret) {
    return res.status(503).json({ error: 'Payment service is not configured. Contact support.' });
  }

  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body || {};
    if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
      return res.status(400).json({ error: 'Missing payment fields.' });
    }

    const expected = crypto
      .createHmac('sha256', secret)
      .update(`${razorpay_order_id}|${razorpay_payment_id}`)
      .digest('hex');

    const expectedBuf = Buffer.from(expected);
    const actualBuf = Buffer.from(String(razorpay_signature));
    const valid = expectedBuf.length === actualBuf.length && crypto.timingSafeEqual(expectedBuf, actualBuf);

    if (!valid) {
      console.error('[verify] Signature mismatch — possible tampered payment.');
      return res.status(400).json({ ok: false, error: 'Payment verification failed.' });
    }

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('[verify]', err);
    return res.status(500).json({ error: 'Verification error. Please contact support.' });
  }
};
