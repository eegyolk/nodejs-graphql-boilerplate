const { GraphQLList, GraphQLInt } = require('graphql');

const { propertyFeaturesType } = require('./types'),
  {
    propertyFeaturesResolver,
    getPropertyFeatureResolver,
  } = require('./resolvers');

const propertyFeatures = {
  type: new GraphQLList(propertyFeaturesType),
  resolve: async (source, args, context, info) =>
    await propertyFeaturesResolver(info),
};

const getPropertyFeature = {
  type: propertyFeaturesType,
  args: {
    id: { type: GraphQLInt },
  },
  resolve: async (source, args, context, info) =>
    await getPropertyFeatureResolver(args.id, info),
};

module.exports = {
  propertyFeatures,
  getPropertyFeature,
};
