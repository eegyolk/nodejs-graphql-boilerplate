const { raw } = require('objection');

const RoleAppModulePermissions = require('../Models/RoleAppModulePermissions');

class RoleAppModulePermissionsRepository {
  static async roleAppModulePermissions(fields) {
    return await RoleAppModulePermissions.query().select(raw(fields));
  }

  static async getRoleAppModulePermission(id, fields) {
    return await RoleAppModulePermissions.query()
      .select(raw(fields))
      .findById(id);
  }

  static async createRoleAppModulePermission(input) {
    const {
      role_id,
      app_module_id,
      can_view,
      can_create,
      can_edit,
      can_delete,
    } = input;

    return await PhoneTypes.query().insert({
      role_id,
      app_module_id,
      can_view,
      can_create,
      can_edit,
      can_delete,
    });
  }
}

module.exports = RoleAppModulePermissionsRepository;
