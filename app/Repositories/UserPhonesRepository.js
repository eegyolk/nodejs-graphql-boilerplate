const UserPhones = require('../Models/UserPhones');

class UserPhonesRepository {
  static async getUserPhones() {
    return await UserPhones.query();
  }

  static async getUserPhone(id) {
    return await UserPhones.query().findById(id);
  }
}

module.exports = UserPhonesRepository;
