const { GraphQLError } = require('graphql');

const RoleAppModulePermissionsRepository = require('../../Repositories/RoleAppModulePermissionsRepository');

const roleAppModulePermissionsResolver = async () => {
  const result =
    await RoleAppModulePermissionsRepository.roleAppModulePermissions();

  if (result.length > 0) {
    return result;
  }

  return new GraphQLError('No data found', {});
};

const getRoleAppModulePermissionResolver = async (id) => {
  const result =
    await RoleAppModulePermissionsRepository.getRoleAppModulePermission(id);

  if (result) {
    return result;
  }

  return new GraphQLError(`No data found for id ${id}`, {});
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
