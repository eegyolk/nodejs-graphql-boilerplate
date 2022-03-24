const { raw } = require('objection');

const IdentificationTypes = require('../Models/IdentificationTypes');

class IdentificationTypesRepository {
  static async identificationTypes(fields) {
    return await IdentificationTypes.query().select(raw(fields));
  }

  static async getIdentificationType(id, fields) {
    return await IdentificationTypes.query().select(raw(fields)).findById(id);
  }

  static async getIdentificationTypes(ids, fields) {
    return await IdentificationTypes.query()
      .select(raw(fields))
      .whereIn('id', ids);
  }

  static async createIdentificationType(input) {
    const { code, label, description, is_default, required_images_count } =
      input;

    return await IdentificationTypes.query().insert({
      code,
      label,
      description,
      is_default,
      required_images_count,
    });
  }
}

module.exports = IdentificationTypesRepository;
