const RoleAppModulePermissionsRepository = require('../../Repositories/RoleAppModulePermissionsRepository');

const getRoleAppModulePermissions = async () => {
  return await RoleAppModulePermissionsRepository.getRoleAppModulePermissions();
};

module.exports = {
  getRoleAppModulePermissions,
};
