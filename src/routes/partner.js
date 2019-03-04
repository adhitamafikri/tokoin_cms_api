import express from 'express';
const router = express.Router();

// queries
import {
  index as getAllPartners
} from '../database/query/Partner';

router.route('/partners')
  .get(getAllPartners)
  .post((req, res) => {
    res.send('Posted a new Partner!!')
  });

export default router;
