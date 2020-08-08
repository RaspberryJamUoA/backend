var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {

  // returns object accessible as result[0]['value'] == True;
  res.json([
    { id: 1, value: "Here's a message from our server."}
  ]);
});

module.exports = router;
