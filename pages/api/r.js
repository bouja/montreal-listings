export default function handler(req, res) {
  const { to } = req.query;
  if (!to) {
    return res.status(400).json({ error: 'Missing affiliate link' });
  }
  const decodedTo = decodeURIComponent(to);
  console.log(`Affiliate click: ${decodedTo}`);
  res.redirect(decodedTo);
}