const UserAddresses = require('../Models/UserAddresses');

class UserAddressesRepository {
  static async userAddresses() {
    return await UserAddresses.query();
  }

  static async getUserAddress(id) {
    return await UserAddresses.query().findById(id);
  }

  static async createUserAddress(input) {
    const {
      user_id,
      address_type_id,
      address_line_1,
      address_line_2,
      barangay,
      city_town,
      state_province,
      postal_code,
      country,
      is_default,
      rank,
    } = input;

    return await UserAddresses.query().insert({
      user_id,
      address_type_id,
      address_line_1,
      address_line_2,
      barangay,
      city_town,
      state_province,
      postal_code,
      country,
      is_default,
      rank,
    });
  }
}

module.exports = UserAddressesRepository;
