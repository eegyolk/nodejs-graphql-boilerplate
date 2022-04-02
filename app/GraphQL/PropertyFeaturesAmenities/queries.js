const { GraphQLList } = require('graphql');
const BigInt = require('graphql-bigint');

const { propertyFeaturesAmenitiesType } = require('./types'),
  {
    propertyFeaturesAmenitiesResolver,
    getPropertyFeatureAmenityResolver,
  } = require('./resolvers');

const propertyFeaturesAmenities = {
  type: new GraphQLList(propertyFeaturesAmenitiesType),
  resolve: async (source, args, context, info) =>
    await propertyFeaturesAmenitiesResolver(info),
};

const getPropertyFeatureAmenity = {
  type: propertyFeaturesAmenitiesType,
  args: {
    id: { type: BigInt },
  },
  resolve: async (source, args, context, info) =>
    await getPropertyFeatureAmenityResolver(args.id, info),
};

module.exports = {
  propertyFeaturesAmenities,
  getPropertyFeatureAmenity,
};
