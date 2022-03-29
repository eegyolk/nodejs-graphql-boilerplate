const { GraphQLList, GraphQLInt } = require('graphql');

const { userSocialNetworksType } = require('./types'),
  {
    userSocialNetworksResolver,
    getUserSocialNetworkResolver,
  } = require('./resolvers');

const userSocialNetworks = {
  type: new GraphQLList(userSocialNetworksType),
  resolve: async (source, args, context, info) =>
    await userSocialNetworksResolver(info),
};

const getUserSocialNetwork = {
  type: userSocialNetworksType,
  args: {
    id: { type: GraphQLInt },
  },
  resolve: async (source, args, context, info) =>
    await getUserSocialNetworkResolver(args.id, info),
};

module.exports = {
  userSocialNetworks,
  getUserSocialNetwork,
};
