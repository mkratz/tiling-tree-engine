const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();

const FIGURES_DIR = path.join(__dirname, 'figures');
if (!fs.existsSync(FIGURES_DIR)) fs.mkdirSync(FIGURES_DIR);

app.use(express.json({ limit: '10mb' }));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// List saved figures
app.get('/api/figures', (req, res) => {
  const files = fs.readdirSync(FIGURES_DIR)
    .filter(f => f.endsWith('.json'))
    .map(f => f.replace('.json', ''))
    .sort();
  res.json(files);
});

// Save figure
app.post('/api/figures/:name', (req, res) => {
  const name = req.params.name.replace(/[^a-zA-Z0-9_\-]/g, '_');
  const filePath = path.join(FIGURES_DIR, name + '.json');
  fs.writeFileSync(filePath, JSON.stringify(req.body, null, 2));
  res.json({ ok: true, path: filePath });
});

// Load figure
app.get('/api/figures/:name', (req, res) => {
  const name = req.params.name.replace(/[^a-zA-Z0-9_\-]/g, '_');
  const filePath = path.join(FIGURES_DIR, name + '.json');
  if (!fs.existsSync(filePath)) return res.status(404).json({ error: 'Not found' });
  res.json(JSON.parse(fs.readFileSync(filePath, 'utf-8')));
});

app.listen(3000, () => {
  console.log('Tiling Decision Tree Engine running at http://localhost:3000');
  console.log('Figures saved to: ' + FIGURES_DIR);
});
