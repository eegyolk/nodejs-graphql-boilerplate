const { GraphQLList, GraphQLInt } = require('graphql');

const { usersType } = require('./types'),
  { usersResolver, getUserResolver } = require('./resolvers');

const users = {
  type: new GraphQLList(usersType),
  resolve: async (source, args, context, info) => await usersResolver(info),
};

const getUser = {
  type: usersType,
  args: {
    id: { type: GraphQLInt },
  },
  resolve: async (source, args, context, info) =>
    await getUserResolver(args.id, info),
};

module.exports = {
  users,
  getUser,
};
