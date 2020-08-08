const {Router} = require('express');
const eventController = require('../controllers/eventController')
const validateBodyEvent = require('../controllers/eventValidator').validateBodyEvent;

const router = Router();

// List events
router.get('/',
    eventController.listEvents
);

router.get('/validEvents',
    eventController.listValidEvents
)

router.post('/',
    validateBodyEvent,
    eventController.insertEvent
);

router.get('/:id?',
    () => {}
    );

module.exports = router;
