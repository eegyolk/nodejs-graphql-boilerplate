const { createRoleAppModulePermissionInputType } = require('./inputTypes'),
  { createRoleAppModulePermissionResolver } = require('./resolvers'),
  { roleAppModulePermissionsType } = require('./types');

const createRoleAppModulePermission = {
  type: roleAppModulePermissionsType,
  args: {
    input: { type: createRoleAppModulePermissionInputType },
  },
  resolve: async (source, args) =>
    await createRoleAppModulePermissionResolver(args),
};

module.exports = {
  createRoleAppModulePermission,
};
