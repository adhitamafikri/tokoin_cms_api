import { sequelize, Sequelize } from '../models';
import PartnerModel from '../models/partner';

const Partner = PartnerModel(sequelize, Sequelize);

export const index = async (req, res, next) => {
  try {
    let partners = await Partner.findAll({
      attributes: { exclude: ['created_at', 'updated_at'] }
    });
    res.json(partners);
  } catch(err) {
    res.json({ err });
  }
}
