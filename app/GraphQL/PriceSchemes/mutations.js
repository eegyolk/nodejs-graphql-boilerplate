const { createPriceSchemeInputType } = require('./inputTypes'),
  { createPriceSchemeResolver } = require('./resolvers'),
  { priceSchemesType } = require('./types');

const createPriceScheme = {
  type: priceSchemesType,
  args: {
    input: { type: createPriceSchemeInputType },
  },
  resolve: async (source, args) => await createPriceSchemeResolver(args),
};

module.exports = {
  createPriceScheme,
};
