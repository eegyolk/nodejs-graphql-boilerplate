const { raw } = require('objection');

const FeatureAmenityTypes = require('../Models/FeatureAmenityTypes');

class FeatureAmenityTypesRepository {
  static async amenities(fields) {
    return await FeatureAmenityTypes.query().select(raw(fields));
  }

  static async getAmenity(id, fields) {
    return await FeatureAmenityTypes.query().select(raw(fields)).findById(id);
  }

  static async getAmenities(ids, fields) {
    return await FeatureAmenityTypes.query()
      .select(raw(fields))
      .whereIn('id', ids);
  }

  static async createAmenity(input) {
    const { code, label, description } = input;

    return await FeatureAmenityTypes.query().insert({
      code,
      label,
      description,
    });
  }
}

module.exports = FeatureAmenityTypesRepository;
