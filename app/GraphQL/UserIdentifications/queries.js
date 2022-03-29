const { GraphQLList, GraphQLInt } = require('graphql');

const { userIdentificationsType } = require('./types'),
  {
    userIdentificationsResolver,
    getUserIdentificationResolver,
  } = require('./resolvers');

const userIdentifications = {
  type: new GraphQLList(userIdentificationsType),
  resolve: async (source, args, context, info) =>
    await userIdentificationsResolver(info),
};

const getUserIdentification = {
  type: userIdentificationsType,
  args: {
    id: { type: GraphQLInt },
  },
  resolve: async (source, args, context, info) =>
    await getUserIdentificationResolver(args.id, info),
};

module.exports = {
  userIdentifications,
  getUserIdentification,
};
