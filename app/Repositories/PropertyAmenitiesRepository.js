const { raw } = require('objection');

const PropertyAmenities = require('../Models/PropertyAmenities');

class PropertyAmenitiesRepository {
  static async propertyAmenities(fields) {
    return await PropertyAmenities.query().select(raw(fields));
  }

  static async getPropertyAmenity(id, fields) {
    return await PropertyAmenities.query().select(raw(fields)).findById(id);
  }

  static async createPropertyAmenity(input) {
    const { property_id, amenity_id } = input;

    return await PropertyAmenities.query().insert({
      property_id,
      amenity_id,
    });
  }
}

module.exports = PropertyAmenitiesRepository;
