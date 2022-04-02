const { raw } = require('objection');

const PropertyFeaturesAmenities = require('../Models/PropertyFeaturesAmenities');

class PropertyFeaturesAmenitiesRepository {
  static async propertyFeaturesAmenities(fields) {
    return await PropertyFeaturesAmenities.query().select(raw(fields));
  }

  static async getPropertyFeatureAmenity(id, fields) {
    return await PropertyFeaturesAmenities.query()
      .select(raw(fields))
      .findById(id);
  }

  static async createPropertyFeatureAmenity(input) {
    const { property_id, feature_id, value } = input;

    return await PropertyFeaturesAmenities.query().insert({
      property_id,
      feature_id,
      value,
    });
  }
}

module.exports = PropertyFeaturesAmenitiesRepository;
