const RoleAppModulePermissions = require('../Models/RoleAppModulePermissions');

class RoleAppModulePermissionsRepository {
  static async getRoleAppModulePermissions() {
    return await RoleAppModulePermissions.query();
  }
}

module.exports = RoleAppModulePermissionsRepository;
