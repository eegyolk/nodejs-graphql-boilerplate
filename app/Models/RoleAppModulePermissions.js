const { Model } = require('objection');

class RoleAppModulePermissions extends Model {
  static get tableName() {
    return 'role_app_module_permissions';
  }
}

module.exports = RoleAppModulePermissions;
