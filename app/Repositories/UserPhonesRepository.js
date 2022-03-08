const { raw } = require('objection');

const UserPhones = require('../Models/UserPhones');

class UserPhonesRepository {
  static async userPhones(fields) {
    return await UserPhones.query().select(raw(fields));
  }

  static async getUserPhone(id, fields) {
    return await UserPhones.query().select(raw(fields)).findById(id);
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
