const UserRoles = require('../Models/UserRoles');

class UserRolesRepository {
  static async getUserRoles() {
    return await UserRoles.query();
  }
}

module.exports = UserRolesRepository;
