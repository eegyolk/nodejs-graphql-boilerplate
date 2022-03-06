const Users = require('../../Models/Users');

class UsersRepository {
  static async getUsers() {
    return await Users.query();
  }
}

module.exports = UsersRepository;
