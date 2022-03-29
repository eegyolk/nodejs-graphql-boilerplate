const { createPriceSchemeDurationInputType } = require('./inputTypes'),
  { createPriceSchemeDurationResolver } = require('./resolvers'),
  { priceSchemeDurationsType } = require('./types');

const createPriceSchemeDuration = {
  type: priceSchemeDurationsType,
  args: {
    input: { type: createPriceSchemeDurationInputType },
  },
  resolve: async (source, args) =>
    await createPriceSchemeDurationResolver(args),
};

module.exports = {
  createPriceSchemeDuration,
};
