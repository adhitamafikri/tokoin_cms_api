import express from 'express';
const router = express.Router();

import { sequelize } from '../database/models';

// import queries
import { login } from '../database/query/user';

const authenticate = (req, res) => {
  console.log(process.env.DB_HOST, process.env.DB_DATABASE);
  sequelize
    .authenticate()
    .then(() => res.json({
      status: 200,
      message: 'successfully authenticated!'
    }))
    .catch(err => res.json({
      error: err
    }));
}

router.get('/auth', authenticate);
router.post('/login', login);

export default router;
