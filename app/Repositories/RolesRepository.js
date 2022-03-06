const Roles = require('../Models/Roles');

class RolesRepository {
  static async getRoles() {
    return await Roles.query();
  }
}

module.exports = RolesRepository;
