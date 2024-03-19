// Import required modules
const express = require('express');

// Initialize Express application
const app = express();

// Regular Expression Routes
app.get(/^\/user(?:\/(\w+))?$/, (req, res) => {
  const userName = req.params[0] ? req.params[0] : 'unknown';
  res.send(`Welcome, ${userName}!`);
});

// Error Handling: 404 - Not Found
app.use((req, res) => {
  res.status(404).send('404 - Not Found');
});

// Server Configuration
const PORT = process.env.PORT || 3000;

// Start the server
const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});