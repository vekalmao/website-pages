const express = require('express');
const path = require('path');
const app = express();
const PORT = 4018;

// Serve the index.html file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Start the server on port 4018
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
