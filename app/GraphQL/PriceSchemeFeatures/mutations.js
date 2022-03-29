const { createPriceSchemeFeatureInputType } = require('./inputTypes'),
  { createPriceSchemeFeatureResolver } = require('./resolvers'),
  { priceSchemeFeaturesType } = require('./types');

const createPriceSchemeFeature = {
  type: priceSchemeFeaturesType,
  args: {
    input: { type: createPriceSchemeFeatureInputType },
  },
  resolve: async (source, args) => await createPriceSchemeFeatureResolver(args),
};

module.exports = {
  createPriceSchemeFeature,
};
