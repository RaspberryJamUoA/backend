var express = require('express');
var router = express.Router();

eventTemplate = {
  eventName: "WDCC x AUCS Hack Weekend",
  description: "Learn it, code it, win it",
  dateTime: "9th August, 2020",
  clubName: "WDCC",
  cost: "",
  location: "Grid AKL, New Zealand",
  membershipRequired: true,
  keywords: ["Code", "React", "JavaScript"]
};

let events = [eventTemplate, eventTemplate, eventTemplate];

// Localhost:9000/events/
router.get('/', function(req, res, next) {

  res.json(
    // Send stuff here.
    events
  );
});

router.get('/:id?', function(req, res, next) {

  res.json(
    // Send stuff here.
    events[req.params['id']]
  );
});

module.exports = router;
