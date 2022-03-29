const { GraphQLList } = require('graphql');
const BigInt = require('graphql-bigint');

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
    id: { type: BigInt },
  },
  resolve: async (source, args, context, info) =>
    await getUserSocialNetworkResolver(args.id, info),
};

module.exports = {
  userSocialNetworks,
  getUserSocialNetwork,
};
