const { raw } = require('objection');

const PropertyFeatures = require('../Models/PropertyFeatures');

class PropertyFeaturesRepository {
  static async propertyFeatures(fields) {
    return await PropertyFeatures.query().select(raw(fields));
  }

  static async getPropertyFeature(id, fields) {
    return await PropertyFeatures.query().select(raw(fields)).findById(id);
  }

  static async getPropertyFeatures(ids, fields) {
    return await PropertyFeatures.query()
      .select(raw(fields))
      .whereIn('id', ids);
  }

  static async createPropertyFeature(input) {
    const { property_id, feature_id, value } = input;

    return await PropertyFeatures.query().insert({
      property_id,
      feature_id,
      value,
    });
  }
}

module.exports = PropertyFeaturesRepository;
