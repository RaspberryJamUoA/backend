const {Router} = require('express');
const eventRouter = require('./routes/eventRouter');
const rootRouter = require('./routes/rootRouter');
const userRouter = require('./routes/userRouter');

const mainRouter = Router();

mainRouter.use('/', rootRouter);
mainRouter.use('/user', userRouter);
mainRouter.use('/events', eventRouter);


module.exports = mainRouter;
