const AddressTypes = require('../Models/AddressTypes');

class AddressTypesRepository {
  static async getAddressTypes() {
    return await AddressTypes.query();
  }

  static async getAddressType(id) {
    return await AddressTypes.query().findById(id);
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
