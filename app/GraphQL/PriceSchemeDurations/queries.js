const { GraphQLList, GraphQLInt } = require('graphql');

const { priceSchemeDurationsType } = require('./types'),
  {
    priceSchemeDurationsResolver,
    getPriceSchemeDurationResolver,
  } = require('./resolvers');

const priceSchemeDurations = {
  type: new GraphQLList(priceSchemeDurationsType),
  resolve: async (source, args, context, info) =>
    await priceSchemeDurationsResolver(info),
};

const getPriceSchemeDuration = {
  type: priceSchemeDurationsType,
  args: {
    id: { type: GraphQLInt },
  },
  resolve: async (source, args, context, info) =>
    await getPriceSchemeDurationResolver(args.id, info),
};

module.exports = {
  priceSchemeDurations,
  getPriceSchemeDuration,
};
