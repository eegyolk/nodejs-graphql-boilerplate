const RoleAppModulePermissionsRepository = require('../../Repositories/RoleAppModulePermissionsRepository');

const roleAppModulePermissionsResolver = async () => {
  return await RoleAppModulePermissionsRepository.roleAppModulePermissions();
};

const getRoleAppModulePermissionResolver = async (id) => {
  return await RoleAppModulePermissionsRepository.getRoleAppModulePermission(
    id
  );
};

const createRoleAppModulePermissionResolver = async (args) => {
  return await RoleAppModulePermissionsRepository.createRoleAppModulePermission(
    args.input
  );
};

module.exports = {
  roleAppModulePermissionsResolver,
  getRoleAppModulePermissionResolver,
  createRoleAppModulePermissionResolver,
};
