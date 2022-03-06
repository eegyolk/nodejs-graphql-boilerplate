const { raw } = require('objection');

const Users = require('../../Models/Users');

class UsersRepository {
  /**
   *
   * @param { name, email, password } attributes
   * @param { Knex } connection
   * @returns
   */
  static async createUser(attributes, connection) {
    const { name, email, password } = attributes;

    return await Users.query(connection).insert({
      name,
      email,
      password,
    });
  }

  /**
   *
   * @param { users.id } id
   * @param { fields[users], includes } query
   * @param {*} connection
   * @returns
   */
  static async getUser(id, query, connection) {
    const queryBuilder = Users.query(connection);
    const { fields, includes } = query;

    // TODO: Handle relationship using includes

    if (fields && fields.hasOwnProperty('users') && fields.users) {
      queryBuilder.select(raw(fields.users));
    }

    return await queryBuilder.findById(id);
  }
}

module.exports = UsersRepository;
