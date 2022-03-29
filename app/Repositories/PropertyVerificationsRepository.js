const { raw } = require('objection');

const PropertyVerifications = require('../Models/PropertyVerifications');

class PropertyVerificationsRepository {
  static async propertyVerifications(fields) {
    return await PropertyVerifications.query().select(raw(fields));
  }

  static async getPropertyVerification(id, fields) {
    return await PropertyVerifications.query().select(raw(fields)).findById(id);
  }

  static async createPropertyVerification(input) {
    const { property_id, remarks, notes } = input;

    return await PropertyVerifications.query().insert({
      property_id,
      remarks,
      notes,
    });
  }
}

module.exports = PropertyVerificationsRepository;
