const AddressTypes = require('../Models/AddressTypes');

class AddressTypesRepository {
  static async addressTypes() {
    return await AddressTypes.query();
  }

  static async getAddressType(id) {
    return await AddressTypes.query().findById(id);
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
