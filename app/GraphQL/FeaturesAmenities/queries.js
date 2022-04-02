const { GraphQLList, GraphQLInt } = require('graphql');

const { featuresAmenitiesType } = require('./types'),
  {
    featuresAminitiesResolver,
    getFeatureAminityResolver,
  } = require('./resolvers');

const featuresAminities = {
  type: new GraphQLList(featuresAmenitiesType),
  resolve: async (source, args, context, info) =>
    await featuresAminitiesResolver(info),
};

const getFeatureAminity = {
  type: featuresAmenitiesType,
  args: {
    id: { type: GraphQLInt },
  },
  resolve: async (source, args, context, info) =>
    await getFeatureAminityResolver(args.id, info),
};

module.exports = {
  featuresAminities,
  getFeatureAminity,
};
