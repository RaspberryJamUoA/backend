const {Router} = require('express');
const eventController = require('../controllers/eventController')

const router = Router();

// List events
router.get('/', eventController.listEvents);

router.post('/', eventController.insertEvent);

router.get('/:id?', () => {});

module.exports = router;
