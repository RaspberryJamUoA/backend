const {Router} = require('express');
const eventController = require('../controllers/eventController')
const validateBodyEvent = require('../controllers/eventValidator').validateBodyEvent;

const router = Router();

// List events
router.get('/',
    validateBodyEvent,
    eventController.listEvents
);

router.post('/',
    eventController.insertEvent
);

router.get('/:id?',
    () => {}
    );

module.exports = router;
