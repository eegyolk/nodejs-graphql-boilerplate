const { GraphQLList } = require('graphql');
const BigInt = require('graphql-bigint');

const { roleAppModulePermissionsType } = require('./types'),
  {
    roleAppModulePermissionsResolver,
    getRoleAppModulePermissionResolver,
  } = require('./resolvers');

const roleAppModulePermissions = {
  type: new GraphQLList(roleAppModulePermissionsType),
  resolve: async (source, args, context, info) =>
    await roleAppModulePermissionsResolver(info),
};

const getRoleAppModulePermission = {
  type: roleAppModulePermissionsType,
  args: {
    id: { type: BigInt },
  },
  resolve: async (source, args, context, info) =>
    await getRoleAppModulePermissionResolver(args.id, info),
};

module.exports = {
  roleAppModulePermissions,
  getRoleAppModulePermission,
};
