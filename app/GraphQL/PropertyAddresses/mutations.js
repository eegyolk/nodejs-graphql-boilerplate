const { createPropertyAddressInputType } = require('./inputTypes'),
  { createPropertyAddressResolver } = require('./resolvers'),
  { propertyAddressesType } = require('./types');

const createPropertyAddress = {
  type: propertyAddressesType,
  args: {
    input: { type: createPropertyAddressInputType },
  },
  resolve: async (source, args) => await createPropertyAddressResolver(args),
};

module.exports = {
  createPropertyAddress,
};
