const { createAddressTypeInputType } = require('./inputTypes'),
  { createAddressTypeResolver } = require('./resolvers'),
  { addressTypesType } = require('./types');

const createAddressType = {
  type: addressTypesType,
  args: {
    input: { type: createAddressTypeInputType },
  },
  resolve: async (source, args) => await createAddressTypeResolver(args),
};

module.exports = {
  createAddressType,
};
