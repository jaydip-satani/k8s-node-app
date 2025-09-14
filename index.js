const express = require("express");
const os = require("os");
const app = express();
const PORT = process.env.PORT || 3000;

// Get pod name from hostname
const podName = os.hostname();

app.get("/", (req, res) => {
  res.send(`Hello from Node.js! Served by pod: ${podName}`);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}, pod: ${podName}`);
});
