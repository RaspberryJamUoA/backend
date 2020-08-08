var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send(`
    <h1>Express API</h1>
    <p>For some reason, you've managed to end up on this page.</p>
    <p>You can access the back-end from here, by making API requests</p>
    <p>Don't know how? This page probably isn't for you then!</p>

    <style>* {text-align: center}</style>
  `);
});

module.exports = router;
