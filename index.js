const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.post('/log', (req, res) => {
  const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
  console.log(`[POST] ${req.url} from ${ip} | body: ${JSON.stringify(req.body)}`);
  res.send('Logged!');
});

app.get('/', (req, res) => {
  res.send('Node.js backend is running!');
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
