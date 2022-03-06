const UserAddresses = require('../Models/UserAddresses');

class UserAddressesRepository {
  static async getUserAddresses() {
    return await UserAddresses.query();
  }
}

module.exports = UserAddressesRepository;
