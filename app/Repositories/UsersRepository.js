const { raw } = require('objection');

const Users = require('../Models/Users');

class UsersRepository {
  static async users(fields) {
    return await Users.query().select(raw(fields));
  }

  static async getUser(id, fields) {
    return await Users.query().select(raw(fields)).findById(id);
  }

  static async getUsers(ids, fields) {
    return await Users.query().select(raw(fields)).whereIn('id', ids);
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
