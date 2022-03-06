const RoleAppModulePermissionsRepository = require('../../Repositories/RoleAppModulePermissionsRepository');

const getRoleAppModulePermissionsResolver = async () => {
  return await RoleAppModulePermissionsRepository.getRoleAppModulePermissions();
};

const getRoleAppModulePermissionResolver = async (id) => {
  return await RoleAppModulePermissionsRepository.getRoleAppModulePermission(
    id
  );
};

module.exports = {
  getRoleAppModulePermissionsResolver,
  getRoleAppModulePermissionResolver,
};
