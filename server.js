const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// The pipeline writes version.json so every deploy is visible on the page.
function getVersion() {
  try {
    return JSON.parse(fs.readFileSync(path.join(__dirname, 'version.json'), 'utf8'));
  } catch {
    return { build: 'local', commit: 'local' };
  }
}

app.get('/', (req, res) => {
  const v = getVersion();
  res.send(`<h1>Hello World from GitHub Actions to Azure</h1><p>Build #${v.build} | commit ${v.commit}</p>`);
});

app.get('/health', (req, res) => {
  res.json({ status: 'ok', ...getVersion() });
});

if (require.main === module) {
  app.listen(port, () => console.log(`Listening on port ${port}`));
}

module.exports = app;
