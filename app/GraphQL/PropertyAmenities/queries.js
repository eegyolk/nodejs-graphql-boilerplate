const { GraphQLList } = require('graphql');
const BigInt = require('graphql-bigint');

const { propertyAmenitiesType } = require('./types'),
  {
    propertyAmenitiesResolver,
    getPropertyAmenityResolver,
  } = require('./resolvers');

const propertyAmenities = {
  type: new GraphQLList(propertyAmenitiesType),
  resolve: async (source, args, context, info) =>
    await propertyAmenitiesResolver(info),
};

const getPropertyAmenity = {
  type: propertyAmenitiesType,
  args: {
    id: { type: BigInt },
  },
  resolve: async (source, args, context, info) =>
    await getPropertyAmenityResolver(args.id, info),
};

module.exports = {
  propertyAmenities,
  getPropertyAmenity,
};
