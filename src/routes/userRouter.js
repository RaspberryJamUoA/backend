const express = require('express');
const router = express.Router();

// Get Users - GET /users/
router.get('/', function(_, res) {
  res.json([
    { id: 1,
      value: "Here's a message from our server."}
  ]);
});

module.exports = router;
