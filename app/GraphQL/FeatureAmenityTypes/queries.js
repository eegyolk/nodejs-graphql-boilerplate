const { GraphQLList, GraphQLInt } = require('graphql');

const { featureAmenityTypesType } = require('./types'),
  {
    featureAmenityTypesResolver,
    getFeatureAmenityTypeResolver,
  } = require('./resolvers');

const featureAmenityTypes = {
  type: new GraphQLList(featureAmenityTypesType),
  resolve: async (source, args, context, info) =>
    await featureAmenityTypesResolver(info),
};

const getFeatureAmenityType = {
  type: featureAmenityTypesType,
  args: {
    id: { type: GraphQLInt },
  },
  resolve: async (source, args, context, info) =>
    await getFeatureAmenityTypeResolver(args.id, info),
};

module.exports = {
  featureAmenityTypes,
  getFeatureAmenityType,
};
