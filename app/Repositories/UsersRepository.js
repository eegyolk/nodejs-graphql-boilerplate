const Users = require('../Models/Users');

class UsersRepository {
  static async getUsers() {
    return await Users.query();
  }

  static async getUser(id) {
    return await Users.query().findById(id);
  }

  static async createUser(input) {
    const {
      name,
      email_address,
      username,
      password,
      image_url,
      remember_token,
      verification_token,
      recovery_token,
    } = input;

    return await Users.query().insert({
      name,
      email_address,
      username,
      password,
      image_url,
      remember_token,
      verification_token,
      recovery_token,
    });
  }
}

module.exports = UsersRepository;
