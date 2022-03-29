const { GraphQLList, GraphQLInt } = require('graphql');

const { leaseDurationsType } = require('./types'),
  { leaseDurationsResolver, getLeaseDurationResolver } = require('./resolvers');

const leaseDurations = {
  type: new GraphQLList(leaseDurationsType),
  resolve: async (source, args, context, info) =>
    await leaseDurationsResolver(info),
};

const getLeaseDuration = {
  type: leaseDurationsType,
  args: {
    id: { type: GraphQLInt },
  },
  resolve: async (source, args, context, info) =>
    await getLeaseDurationResolver(args.id, info),
};

module.exports = {
  leaseDurations,
  getLeaseDuration,
};
