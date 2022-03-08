const graphqlFields = require('graphql-fields');

const RoleAppModulePermissionsRepository = require('../../Repositories/RoleAppModulePermissionsRepository');

const roleAppModulePermissionsResolver = async (info) => {
  const fields = Object.keys(
    graphqlFields(info, {}, { excludedFields: ['role', 'app_module'] })
  );

  return await RoleAppModulePermissionsRepository.roleAppModulePermissions(
    fields.join(',')
  );
};

const getRoleAppModulePermissionResolver = async (id, info) => {
  const fields = Object.keys(
    graphqlFields(info, {}, { excludedFields: ['role', 'app_module'] })
  );

  return await RoleAppModulePermissionsRepository.getRoleAppModulePermission(
    id,
    fields.join(',')
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
