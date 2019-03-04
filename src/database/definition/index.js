import Sequelize from 'sequelize';
import 'dotenv/config';
import { User, Partner } from '../model';

// initiate Sequelize
export const sequelize = new Sequelize(process.env.DB_DATABASE, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: process.env.DB_DIALECT,
  port: process.env.DB_PORT,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  operatorsAliases: true,
  define: {
    underscoredAll: true,
  }
});

export const UserModel = sequelize.define(User.tableName, User.attributes);
export const PartnerModel = sequelize.define(Partner.tableName, Partner.attributes);
