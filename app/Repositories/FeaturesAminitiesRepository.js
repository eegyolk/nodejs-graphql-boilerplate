const { raw } = require('objection');

const FeaturesAminities = require('../Models/FeaturesAminities');

class FeaturesAminitiesRepository {
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
    const { feature_amenity_type_id, code, label, description, with_value } =
      input;

    return await FeaturesAminities.query().insert({
      feature_amenity_type_id,
      code,
      label,
      description,
      with_value,
    });
  }
}

module.exports = FeaturesAminitiesRepository;
