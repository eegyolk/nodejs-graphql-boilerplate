const { raw } = require('objection');

const PhoneTypes = require('../Models/PhoneTypes');

class PhoneTypesRepository {
  static async phoneTypes(fields) {
    return await PhoneTypes.query().select(raw(fields));
  }

  static async getPhoneType(id, fields) {
    return await PhoneTypes.query().select(raw(fields)).findById(id);
  }

  static async getPhoneTypes(ids) {
    return await PhoneTypes.query().whereIn('id', ids);
  }

  static async createPhoneType(input) {
    const { code, label, description, sub_type, is_default } = input;

    return await PhoneTypes.query().insert({
      code,
      label,
      description,
      sub_type,
      is_default,
    });
  }
}

module.exports = PhoneTypesRepository;
