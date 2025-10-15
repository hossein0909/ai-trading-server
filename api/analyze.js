export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { symbol, price, timeframe } = req.body;
    
    let analysis = "HOLD";
    let confidence = 0.5;
    
    if (price && symbol) {
      if (price > 1.0800 && symbol.includes('EUR')) {
        analysis = "BUY";
        confidence = 0.7;
      } else if (price < 1.0700 && symbol.includes('EUR')) {
        analysis = "SELL";
        confidence = 0.6;
      }
    }
    
    res.status(200).json({
      analysis: analysis,
      confidence: confidence,
      timestamp: new Date().toISOString()
    });
    
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
}
