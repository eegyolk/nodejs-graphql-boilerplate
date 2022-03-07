const PhoneTypes = require('../Models/PhoneTypes');

class PhoneTypesRepository {
  static async phoneTypes() {
    return await PhoneTypes.query();
  }

  static async getPhoneType(id) {
    return await PhoneTypes.query().findById(id);
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
