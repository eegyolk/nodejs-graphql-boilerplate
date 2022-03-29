const { GraphQLList, GraphQLInt } = require('graphql');

const { socialNetworksType } = require('./types'),
  { socialNetworksResolver, getSocialNetworkResolver } = require('./resolvers');

const socialNetworks = {
  type: new GraphQLList(socialNetworksType),
  resolve: async (source, args, context, info) =>
    await socialNetworksResolver(info),
};

const getSocialNetwork = {
  type: socialNetworksType,
  args: {
    id: { type: GraphQLInt },
  },
  resolve: async (source, args, context, info) =>
    await getSocialNetworkResolver(args.id, info),
};

module.exports = {
  socialNetworks,
  getSocialNetwork,
};
