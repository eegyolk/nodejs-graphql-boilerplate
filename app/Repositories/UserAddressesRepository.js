const UserAddresses = require('../Models/UserAddresses');

class UserAddressesRepository {
  static async getUserAddresses() {
    return await UserAddresses.query();
  }

  static async getUserAddress(id) {
    return await UserAddresses.query().findById(id);
  }
}

module.exports = UserAddressesRepository;
