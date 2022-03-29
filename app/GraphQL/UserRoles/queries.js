const { GraphQLList, GraphQLInt } = require('graphql');

const { userRolesType } = require('./types'),
  { userRolesResolver, getUserRoleResolver } = require('./resolvers');

const userRoles = {
  type: new GraphQLList(userRolesType),
  resolve: async (source, args, context, info) => await userRolesResolver(info),
};

const getUserRole = {
  type: userRolesType,
  args: {
    id: { type: GraphQLInt },
  },
  resolve: async (source, args, context, info) =>
    await getUserRoleResolver(args.id, info),
};

module.exports = {
  userRoles,
  getUserRole,
};
