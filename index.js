const express = require('express');
const cors = require('cors');
const app = express();

const data = require('./data.json'); // Ensure data.json is in the same folder

app.use(cors()); // Enable CORS for all origins

// Route to fetch all accounts
app.get('/Accounts', (req, res) => {
  res.json(data);
});

// Route to fetch a single account by ID
app.get('/Accounts/:id', (req, res) => {
  const id = parseInt(req.params.id); // Get the ID from the request URL
  const account = data.find(item => item.id === id); // Find the account with matching ID

  if (account) {
    res.json(account); // Send the account data if found
  } else {
    res.status(404).json({ message: 'Account not found' }); // Return 404 if not found
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
