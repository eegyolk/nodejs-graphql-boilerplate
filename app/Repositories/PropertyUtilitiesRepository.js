const { raw } = require('objection');

const PropertyUtilities = require('../Models/PropertyUtilities');

class PropertyUtilitiesRepository {
  static async propertyUtilities(fields) {
    return await PropertyUtilities.query().select(raw(fields));
  }

  static async getPropertyUtility(id, fields) {
    return await PropertyUtilities.query().select(raw(fields)).findById(id);
  }

  static async createPropertyUtility(input) {
    const { property_id, utility_id, fee } = input;

    return await PropertyUtilities.query().insert({
      property_id,
      utility_id,
      fee,
    });
  }
}

module.exports = PropertyUtilitiesRepository;
