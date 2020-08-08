const {Router} = require('express');
const eventController = require('../controllers/eventController')
const {eventValidator} = require('../controllers/eventValidator');

const router = Router();

// List events
router.get('/',
    eventValidator.validateBodyEvents,
    eventController.listEvent
);

router.post('/',
    eventController.insertEvent
);

router.get('/:id?',
    () => {}
    );

module.exports = router;
