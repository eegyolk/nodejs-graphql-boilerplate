const UserRoles = require('../Models/UserRoles');

class UserRolesRepository {
  static async getUserRoles() {
    return await UserRoles.query();
  }

  static async getUserRole(id) {
    return await UserRoles.query().findById(id);
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
