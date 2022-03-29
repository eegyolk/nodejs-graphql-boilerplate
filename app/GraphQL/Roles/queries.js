const { GraphQLList, GraphQLInt } = require('graphql');

const { rolesType } = require('./types'),
  { rolesResolver, getRoleResolver } = require('./resolvers');

const roles = {
  type: new GraphQLList(rolesType),
  resolve: async (source, args, context, info) => await rolesResolver(info),
};

const getRole = {
  type: rolesType,
  args: {
    id: { type: GraphQLInt },
  },
  resolve: async (source, args, context, info) =>
    await getRoleResolver(args.id, info),
};

module.exports = {
  roles,
  getRole,
};
