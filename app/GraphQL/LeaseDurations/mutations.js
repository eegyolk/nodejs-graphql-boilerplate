const { createLeaseDurationInputType } = require('./inputTypes'),
  { createLeaseDurationResolver } = require('./resolvers'),
  { leaseDurationsType } = require('./types');

const createLeaseDuration = {
  type: leaseDurationsType,
  args: {
    input: { type: createLeaseDurationInputType },
  },
  resolve: async (source, args) => await createLeaseDurationResolver(args),
};

module.exports = {
  createLeaseDuration,
};
