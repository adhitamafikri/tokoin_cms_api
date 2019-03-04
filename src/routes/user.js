import express from 'express';
const router = express.Router();

// queries
import {
  index as getAllUsers
} from '../database/query/User';

router.route('/users')
  .get(getAllUsers)
  .post((req, res) => {
    res.send('Posted a new User!!')
  });

export default router;
