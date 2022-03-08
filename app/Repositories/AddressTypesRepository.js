const { raw } = require('objection');

const AddressTypes = require('../Models/AddressTypes');

class AddressTypesRepository {
  static async addressTypes(fields) {
    return await AddressTypes.query().select(raw(fields));
  }

  static async getAddressType(id, fields) {
    return await AddressTypes.query().select(raw(fields)).findById(id);
  }

  static async getAddressTypes(ids) {
    return await AddressTypes.query().whereIn('id', ids);
  }

  static async createAddressType(input) {
    const { code, label, description, is_default } = input;

    return await AddressTypes.query().insert({
      code,
      label,
      description,
      is_default,
    });
  }
}

module.exports = AddressTypesRepository;
