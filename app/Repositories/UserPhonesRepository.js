const UserPhones = require('../Models/UserPhones');

class UserPhonesRepository {
  static async userPhones() {
    return await UserPhones.query();
  }

  static async getUserPhone(id) {
    return await UserPhones.query().findById(id);
  }

  static async createUserPhone(input) {
    const { user_id, phone_type_id, number, is_default, rank } = input;

    return await UserPhones.query().insert({
      user_id,
      phone_type_id,
      number,
      is_default,
      rank,
    });
  }
}

module.exports = UserPhonesRepository;
