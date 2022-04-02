const { createFeatureAmenityTypeInputType } = require('./inputTypes'),
  { createFeatureAmenityTypeResolver } = require('./resolvers'),
  { featureAmenityTypesType } = require('./types');

const createFeatureAmenityType = {
  type: featureAmenityTypesType,
  args: {
    input: { type: createFeatureAmenityTypeInputType },
  },
  resolve: async (source, args) => await createFeatureAmenityTypeResolver(args),
};

module.exports = {
  createFeatureAmenityType,
};
