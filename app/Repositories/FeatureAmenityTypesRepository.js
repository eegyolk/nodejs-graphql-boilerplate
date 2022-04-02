const { raw } = require('objection');

const FeatureAmenityTypes = require('../Models/FeatureAmenityTypes');

class FeatureAmenityTypesRepository {
  static async featureAmenityTypes(fields) {
    return await FeatureAmenityTypes.query().select(raw(fields));
  }

  static async getFeatureAmenityType(id, fields) {
    return await FeatureAmenityTypes.query().select(raw(fields)).findById(id);
  }

  static async getFeatureAmenityTypes(ids, fields) {
    return await FeatureAmenityTypes.query()
      .select(raw(fields))
      .whereIn('id', ids);
  }

  static async createFeatureAmenityType(input) {
    const { code, label, description } = input;

    return await FeatureAmenityTypes.query().insert({
      code,
      label,
      description,
    });
  }
}

module.exports = FeatureAmenityTypesRepository;
