const { createPropertyPublicTransportInputType } = require('./inputTypes'),
  { createPropertyPublicTransportResolver } = require('./resolvers'),
  { propertyPublicTransportsType } = require('./types');

const createPropertyPublicTransport = {
  type: propertyPublicTransportsType,
  args: {
    input: { type: createPropertyPublicTransportInputType },
  },
  resolve: async (source, args) =>
    await createPropertyPublicTransportResolver(args),
};

module.exports = {
  createPropertyPublicTransport,
};
