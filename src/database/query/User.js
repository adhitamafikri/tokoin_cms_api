import { sequelize, Sequelize } from '../models';
import UserModel from '../models/user';
import jwt from 'jsonwebtoken';

const User = UserModel(sequelize, Sequelize);

const getToken = (user, res) => {
  jwt.sign({ user }, 'secretKey', (err, token) => {
    if(!err) {
      res.json({ token });
    } else {
      res.json({ err });
    }
  })
}

export const login = async (req, res) => {
  try {
    let user = await User.findOne({
      where: {
        email: 'adhitamafikri@test.com',
        password: 'adhitamafikri'
      }
    });
    if(user) getToken(user, res);
    else res.json({ message: 'Invalid Credentials' });
  } catch(err) {
    res.json({ err });
  }
}

export const index = async (req, res, next) => {
  try {
    let users = await User.findAll({
      attributes: { exclude: ['created_at', 'updated_at'] }
    });
    res.json(users);
  } catch(err) {
    res.json({ err });
  }
}
