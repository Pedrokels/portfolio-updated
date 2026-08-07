const http = require('http');
const { URL } = require('url');

const PORT = process.env.PORT || 3001;

function buildPluginUrl(href, width = 340, height = 600) {
  const encoded = encodeURIComponent(href);
  return `https://www.facebook.com/plugins/video.php?height=${height}&href=${encoded}&show_text=false&width=${width}&t=0`;
}

async function fetchBody(url) {
  return new Promise((resolve, reject) => {
    const https = require('https');
    https.get(url, (res) => {
      let data = '';
      res.on('data', (chunk) => (data += chunk));
      res.on('end', () => resolve({ status: res.statusCode, text: data }));
    }).on('error', reject);
  });
}

const server = http.createServer(async (req, res) => {
  try {
    const url = new URL(req.url, `http://${req.headers.host}`);
    if (url.pathname !== '/check') {
      res.writeHead(404, { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });
      return res.end(JSON.stringify({ error: 'Not found' }));
    }

    const href = url.searchParams.get('href');
    if (!href) {
      res.writeHead(400, { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });
      return res.end(JSON.stringify({ error: 'Missing href parameter' }));
    }

    const pluginUrl = buildPluginUrl(href);
    // Fetch the plugin HTML
    const result = await fetchBody(pluginUrl);
    const body = result.text || '';
    const lowered = body.toLowerCase();

    // Heuristics: look for "unavailable", "can't be embedded", or similar messaging
    const unavailablePhrases = ["unavailable", "this video can't be embedded", "can't be embedded", 'video on facebook - learn more'];
    const isUnavailable = unavailablePhrases.some(p => lowered.includes(p));

    const embeddable = !isUnavailable && result.status === 200;

    res.writeHead(200, { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });
    res.end(JSON.stringify({ embeddable }));
  } catch (err) {
    res.writeHead(500, { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });
    res.end(JSON.stringify({ error: err.message }));
  }
});

server.listen(PORT, () => {
  console.log(`check-embed server listening on http://localhost:${PORT}`);
});
