const { createPriceDurationInputType } = require('./inputTypes'),
  { createPriceDurationResolver } = require('./resolvers'),
  { priceDurationsType } = require('./types');

const createPriceDuration = {
  type: priceDurationsType,
  args: {
    input: { type: createPriceDurationInputType },
  },
  resolve: async (source, args) => await createPriceDurationResolver(args),
};

module.exports = {
  createPriceDuration,
};
