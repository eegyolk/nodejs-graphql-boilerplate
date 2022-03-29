const { raw } = require('objection');

const PropertyLeaseDurations = require('../Models/PropertyLeaseDurations');

class PropertyLeaseDurationsRepository {
  static async propertyLeaseDurations(fields) {
    return await PropertyLeaseDurations.query().select(raw(fields));
  }

  static async getPropertyLeaseDuration(id, fields) {
    return await PropertyLeaseDurations.query()
      .select(raw(fields))
      .findById(id);
  }

  static async createPropertyLeaseDuration(input) {
    const { property_id, lease_duration_id, fee } = input;

    return await PropertyLeaseDurations.query().insert({
      property_id,
      lease_duration_id,
      fee,
    });
  }
}

module.exports = PropertyLeaseDurationsRepository;
