const https = require('https');

function getTicker(symbol) {
  return new Promise((resolve, reject) => {
    https.get(`https://api.binance.com/api/v3/ticker/price?symbol=${symbol}`, res => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          resolve(JSON.parse(data));
        } catch (err) {
          reject(err);
        }
      });
    }).on('error', reject);
  });
}

(async () => {
  try {
    const ticker = await getTicker('BTCUSDT');
    console.log(`Binance connectivity OK. BTCUSDT price: ${ticker.price}`);
  } catch (err) {
    console.error('Connection to Binance failed:', err.message);
    process.exit(1);
  }
})();
