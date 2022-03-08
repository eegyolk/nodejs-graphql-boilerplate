const { raw } = require('objection');

const Roles = require('../Models/Roles');

class RolesRepository {
  static async roles(fields) {
    return await Roles.query().select(raw(fields));
  }

  static async getRole(id, fields) {
    return await Roles.query().select(raw(fields)).findById(id);
  }

  static async getRoles(ids, fields) {
    return await Roles.query().select(raw(fields)).whereIn('id', ids);
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
