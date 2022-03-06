const UserPhones = require('../Models/UserPhones');

class UserPhonesRepository {
  static async getUserPhones() {
    return await UserPhones.query();
  }
}

module.exports = UserPhonesRepository;
