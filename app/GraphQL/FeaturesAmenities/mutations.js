const { createFeatureAmenityInputType } = require('./inputTypes'),
  { createFeatureAminityResolver } = require('./resolvers'),
  { featuresAmenitiesType } = require('./types');

const createFeatureAminity = {
  type: featuresAmenitiesType,
  args: {
    input: { type: createFeatureAmenityInputType },
  },
  resolve: async (source, args) => await createFeatureAminityResolver(args),
};

module.exports = {
  createFeatureAminity,
};
