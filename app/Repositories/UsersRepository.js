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
    const { username, email_address, password, firstname, lastname } = input;

    return await Users.query().insert({
      username,
      email_address,
      password,
      firstname,
      lastname,
    });
  }
}

module.exports = UsersRepository;
