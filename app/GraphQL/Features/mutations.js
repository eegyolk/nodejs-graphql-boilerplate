const { createFeatureInputType } = require('./inputTypes'),
  { createFeatureResolver } = require('./resolvers'),
  { featuresType } = require('./types');

const createFeature = {
  type: featuresType,
  args: {
    input: { type: createFeatureInputType },
  },
  resolve: async (source, args) => await createFeatureResolver(args),
};

module.exports = {
  createFeature,
};
