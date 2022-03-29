const { createPropertyLeaseDurationInputType } = require('./inputTypes'),
  { createPropertyLeaseDurationResolver } = require('./resolvers'),
  { propertyLeaseDurationsType } = require('./types');

const createPropertyLeaseDuration = {
  type: propertyLeaseDurationsType,
  args: {
    input: { type: createPropertyLeaseDurationInputType },
  },
  resolve: async (source, args) =>
    await createPropertyLeaseDurationResolver(args),
};

module.exports = {
  createPropertyLeaseDuration,
};
