const express = require('express');
const cors = require('cors');
const app = express();

const data = require('./data.json'); // Ensure data.json is in the same folder

app.use(cors()); // Enable CORS for all origins

app.get('/Accounts', (req, res) => {
  res.json(data);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
