const RoleAppModulePermissions = require('../Models/RoleAppModulePermissions');

class RoleAppModulePermissionsRepository {
  static async getRoleAppModulePermissions() {
    return await RoleAppModulePermissions.query();
  }

  static async getRoleAppModulePermission(id) {
    return await RoleAppModulePermissions.query().findById(id);
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
