import express from 'express';
const router = express.Router();

// import routes
import authRouter from './auth';
import userRouter from './user';
import partnerRouter from './partner';

const routeStack = [
  authRouter, userRouter, partnerRouter
];

router.get('/', function(req, res, next) {
  res.json({
    message: 'This is Tokoin CMS API'
  });
});

router.use(routeStack);

export default router;
