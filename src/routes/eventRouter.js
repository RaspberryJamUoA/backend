var express = require('express');
var router = express.Router();
var client = require("../db/mongoClient");
const eventController = require('../controllers/eventController')

// List events
router.get('/', eventController.listEvents);

router.post('/', eventController.insertEvent);

router.get('/:id?', () => {});

module.exports = router;