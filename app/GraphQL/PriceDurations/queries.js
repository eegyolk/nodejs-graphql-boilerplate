const { GraphQLList, GraphQLInt } = require('graphql');

const { priceDurationsType } = require('./types'),
  { priceDurationsResolver, getPriceDurationResolver } = require('./resolvers');

const priceDurations = {
  type: new GraphQLList(priceDurationsType),
  resolve: async (source, args, context, info) =>
    await priceDurationsResolver(info),
};

const getPriceDuration = {
  type: priceDurationsType,
  args: {
    id: { type: GraphQLInt },
  },
  resolve: async (source, args, context, info) =>
    await getPriceDurationResolver(args.id, info),
};

module.exports = {
  priceDurations,
  getPriceDuration,
};
