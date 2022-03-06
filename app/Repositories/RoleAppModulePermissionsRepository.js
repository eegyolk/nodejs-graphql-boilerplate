const RoleAppModulePermissions = require('../Models/RoleAppModulePermissions');

class RoleAppModulePermissionsRepository {
  static async getRoleAppModulePermissions() {
    return await RoleAppModulePermissions.query();
  }

  static async getRoleAppModulePermission(id) {
    return await RoleAppModulePermissions.query().findById(id);
  }
}

module.exports = RoleAppModulePermissionsRepository;
