const { createPropertyUtilityInputType } = require('./inputTypes'),
  { createPropertyUtilityResolver } = require('./resolvers'),
  { propertyUtilitiesType } = require('./types');

const createPropertyUtility = {
  type: propertyUtilitiesType,
  args: {
    input: { type: createPropertyUtilityInputType },
  },
  resolve: async (source, args) => await createPropertyUtilityResolver(args),
};

module.exports = {
  createPropertyUtility,
};
