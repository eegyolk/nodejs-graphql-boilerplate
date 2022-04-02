const { GraphQLList, GraphQLInt } = require('graphql');

const { accommodationTypesType } = require('./types'),
  {
    accommodationTypesResolver,
    getAccommodationTypeResolver,
  } = require('./resolvers');

const accommodationTypes = {
  type: new GraphQLList(accommodationTypesType),
  resolve: async (source, args, context, info) =>
    await accommodationTypesResolver(info),
};

const getAccommodationType = {
  type: accommodationTypesType,
  args: {
    id: { type: GraphQLInt },
  },
  resolve: async (source, args, context, info) =>
    await getAccommodationTypeResolver(args.id, info),
};

module.exports = {
  accommodationTypes,
  getAccommodationType,
};
