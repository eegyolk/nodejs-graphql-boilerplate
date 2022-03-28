const { raw } = require('objection');

const PropertyTypes = require('../Models/PropertyTypes');

class PropertyTypesRepository {
  static async propertyTypes(fields) {
    return await PropertyTypes.query().select(raw(fields));
  }

  static async getPropertyType(id, fields) {
    return await PropertyTypes.query().select(raw(fields)).findById(id);
  }

  static async getPropertyTypes(ids, fields) {
    return await PropertyTypes.query().select(raw(fields)).whereIn('id', ids);
  }

  static async createPropertyType(input) {
    const { code, label, description } = input;

    return await PropertyTypes.query().insert({
      code,
      label,
      description,
    });
  }
}

module.exports = PropertyTypesRepository;
