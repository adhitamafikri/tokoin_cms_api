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
        email: 'adhitamafikri@testa.com',
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
  console.log(User);
  try {
    let users = await User.findAll();
    res.json(users);
  } catch(err) {
    res.json({ err });
  }
}
