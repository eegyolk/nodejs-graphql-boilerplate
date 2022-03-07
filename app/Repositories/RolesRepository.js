const Roles = require('../Models/Roles');

class RolesRepository {
  static async getRoles() {
    return await Roles.query();
  }

  static async getRole(id) {
    return await Roles.query().findById(id);
  }

  static async createRole(input) {
    const { code, label, description, is_active } = input;

    return await Roles.query().insert({
      code,
      label,
      description,
      is_active,
    });
  }
}

module.exports = RolesRepository;
