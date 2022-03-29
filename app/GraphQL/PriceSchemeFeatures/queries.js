const { GraphQLList, GraphQLInt } = require('graphql');

const { priceSchemeFeaturesType } = require('./types'),
  {
    priceSchemeFeaturesResolver,
    getPriceSchemeFeatureResolver,
  } = require('./resolvers');

const priceSchemeFeatures = {
  type: new GraphQLList(priceSchemeFeaturesType),
  resolve: async (source, args, context, info) =>
    await priceSchemeFeaturesResolver(info),
};

const getPriceSchemeFeature = {
  type: priceSchemeFeaturesType,
  args: {
    id: { type: GraphQLInt },
  },
  resolve: async (source, args, context, info) =>
    await getPriceSchemeFeatureResolver(args.id, info),
};

module.exports = {
  priceSchemeFeatures,
  getPriceSchemeFeature,
};
