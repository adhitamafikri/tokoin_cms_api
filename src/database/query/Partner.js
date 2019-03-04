import { PartnerModel } from '../definition';

export const index = async (req, res, next) => {
  try {
    let partners = await PartnerModel.findAll();
    res.json(partners);
  } catch(err) {
    res.json({ err });
  }
}
