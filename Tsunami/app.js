const express = require('express');
const path = require('path');

const app = express();

const buildPath = path.join(__dirname, 'dist'); 
app.use(express.static(buildPath));

app.get('*', (req, res) => {
  res.sendFile(path.join(buildPath, 'index.html'));
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});