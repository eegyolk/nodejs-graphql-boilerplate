const { createPropertyFeatureAmenityInputType } = require('./inputTypes'),
  { createPropertyFeatureAmenityResolver } = require('./resolvers'),
  { propertyFeaturesAmenitiesType } = require('./types');

const createPropertyFeatureAmenity = {
  type: propertyFeaturesAmenitiesType,
  args: {
    input: { type: createPropertyFeatureAmenityInputType },
  },
  resolve: async (source, args) =>
    await createPropertyFeatureAmenityResolver(args),
};

module.exports = {
  createPropertyFeatureAmenity,
};
