const AddressTypes = require('../Models/AddressTypes');

class AddressTypesRepository {
  static async getAddressTypes() {
    return await AddressTypes.query();
  }
}

module.exports = AddressTypesRepository;
