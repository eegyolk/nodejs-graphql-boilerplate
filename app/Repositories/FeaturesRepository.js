const { raw } = require('objection');

const Features = require('../Models/Features');

class FeaturesRepository {
  static async features(fields) {
    return await Features.query().select(raw(fields));
  }

  static async getFeature(id, fields) {
    return await Features.query().select(raw(fields)).findById(id);
  }

  static async getFeatures(ids, fields) {
    return await Features.query().select(raw(fields)).whereIn('id', ids);
  }

  static async createFeature(input) {
    const { code, label, description, with_value } = input;

    return await Features.query().insert({
      code,
      label,
      description,
      with_value,
    });
  }
}

module.exports = FeaturesRepository;
