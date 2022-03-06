const UserRoles = require('../Models/UserRoles');

class UserRolesRepository {
  static async getUserRoles() {
    return await UserRoles.query();
  }

  static async getUserRole(id) {
    return await UserRoles.query().findById(id);
  }
}

module.exports = UserRolesRepository;
