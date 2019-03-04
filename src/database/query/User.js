import { UserModel } from '../definition';
import jwt from 'jsonwebtoken';

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
    let user = await UserModel.findOne({
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
  try {
    let users = await UserModel.findAll();
    res.json(users);
  } catch(err) {
    res.json({ err });
  }
}
