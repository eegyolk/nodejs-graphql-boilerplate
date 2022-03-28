const { raw } = require('objection');

const PropertyAddresses = require('../Models/PropertyAddresses');

class PropertyAddressesRepository {
  static async propertyAddresses(fields) {
    return await PropertyAddresses.query().select(raw(fields));
  }

  static async getPropertyAddress(id, fields) {
    return await PropertyAddresses.query().select(raw(fields)).findById(id);
  }

  static async getPropertyAddresses(ids, fields) {
    return await PropertyAddresses.query()
      .select(raw(fields))
      .whereIn('id', ids);
  }

  static async createPropertyAddress(input) {
    const {
      property_id,
      latitude,
      longitude,
      address_line_1,
      address_line_2,
      barangay,
      city_town,
      state_province,
      postal_code,
      country,
    } = input;

    return await PropertyAddresses.query().insert({
      property_id,
      latitude,
      longitude,
      address_line_1,
      address_line_2,
      barangay,
      city_town,
      state_province,
      postal_code,
      country,
    });
  }
}

module.exports = PropertyAddressesRepository;
