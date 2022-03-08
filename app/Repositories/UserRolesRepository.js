const { raw } = require('objection');

const UserRoles = require('../Models/UserRoles');

class UserRolesRepository {
  static async userRoles(fields) {
    return await UserRoles.query().select(raw(fields));
  }

  static async getUserRole(id, fields) {
    return await UserRoles.query().select(raw(fields)).findById(id);
  }

  static async createUserRole(input) {
    const { user_id, role_id } = input;

    return await UserRoles.query().insert({
      user_id,
      role_id,
    });
  }
}

module.exports = UserRolesRepository;
