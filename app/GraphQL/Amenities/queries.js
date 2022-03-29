const { GraphQLList, GraphQLInt } = require('graphql');

const { amenitiesType } = require('./types'),
  { amenitiesResolver, getAmenityResolver } = require('./resolvers');

const amenities = {
  type: new GraphQLList(amenitiesType),
  resolve: async (source, args, context, info) => await amenitiesResolver(info),
};

const getAmenity = {
  type: amenitiesType,
  args: {
    id: { type: GraphQLInt },
  },
  resolve: async (source, args, context, info) =>
    await getAmenityResolver(args.id, info),
};

module.exports = {
  amenities,
  getAmenity,
};
