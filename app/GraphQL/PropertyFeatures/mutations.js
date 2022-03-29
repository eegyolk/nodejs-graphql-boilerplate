const { createPropertyFeatureInputType } = require('./inputTypes'),
  { createPropertyFeatureResolver } = require('./resolvers'),
  { propertyFeaturesType } = require('./types');

const createPropertyFeature = {
  type: propertyFeaturesType,
  args: {
    input: { type: createPropertyFeatureInputType },
  },
  resolve: async (source, args) => await createPropertyFeatureResolver(args),
};

module.exports = {
  createPropertyFeature,
};
