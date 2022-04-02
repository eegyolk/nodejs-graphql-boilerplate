const { raw } = require('objection');

const Properties = require('../Models/Properties');

class PropertiesRepository {
  static async properties(fields) {
    return await Properties.query().select(raw(fields));
  }

  static async getProperty(id, fields) {
    return await Properties.query().select(raw(fields)).findById(id);
  }

  static async getProperties(ids, fields) {
    return await Properties.query().select(raw(fields)).whereIn('id', ids);
  }

  static async createProperty(input) {
    const {
      user_id,
      unit_type_id,
      property_type_id,
      accommodation_type_id,
      title,
      description,
      lot_area,
      floor_area,
      verification_status,
    } = input;

    return await Properties.query().insert({
      user_id,
      unit_type_id,
      property_type_id,
      accommodation_type_id,
      title,
      description,
      lot_area,
      floor_area,
      verification_status,
    });
  }
}

module.exports = PropertiesRepository;
