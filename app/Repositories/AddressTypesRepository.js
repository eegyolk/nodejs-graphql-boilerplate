const AddressTypes = require('../Models/AddressTypes');

class AddressTypesRepository {
  static async getAddressTypes() {
    return await AddressTypes.query();
  }

  static async getAddressType(id) {
    return await AddressTypes.query().findById(id);
  }
}

module.exports = AddressTypesRepository;
