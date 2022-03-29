const { GraphQLList, GraphQLInt } = require('graphql');

const { featuresType } = require('./types'),
  { featuresResolver, getFeatureResolver } = require('./resolvers');

const features = {
  type: new GraphQLList(featuresType),
  resolve: async (source, args, context, info) => await featuresResolver(info),
};

const getFeature = {
  type: featuresType,
  args: {
    id: { type: GraphQLInt },
  },
  resolve: async (source, args, context, info) =>
    await getFeatureResolver(args.id, info),
};

module.exports = {
  features,
  getFeature,
};
