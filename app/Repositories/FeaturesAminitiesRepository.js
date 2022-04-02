const { raw } = require('objection');

const FeaturesAminities = require('../Models/FeaturesAminities');

class FeatureAmenityTypesRepository {
  static async featuresAminities(fields) {
    return await FeaturesAminities.query().select(raw(fields));
  }

  static async getFeatureAminity(id, fields) {
    return await FeaturesAminities.query().select(raw(fields)).findById(id);
  }

  static async getFeaturesAminities(ids, fields) {
    return await FeaturesAminities.query()
      .select(raw(fields))
      .whereIn('id', ids);
  }

  static async createFeatureAminity(input) {
    const { code, label, description, with_value } = input;

    return await FeaturesAminities.query().insert({
      code,
      label,
      description,
      with_value,
    });
  }
}

module.exports = FeatureAmenityTypesRepository;
