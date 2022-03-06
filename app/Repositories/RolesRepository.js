const Roles = require('../Models/Roles');

class RolesRepository {
  static async getRoles() {
    return await Roles.query();
  }

  static async getRole(id) {
    return await Roles.query().findById(id);
  }
}

module.exports = RolesRepository;
