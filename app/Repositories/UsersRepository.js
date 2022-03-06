const Users = require('../Models/Users');

class UsersRepository {
  static async getUsers() {
    return await Users.query();
  }

  static async getUser(id) {
    return await Users.query().findById(id);
  }
}

module.exports = UsersRepository;
