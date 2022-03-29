const { createUserAddressInputType } = require('./inputTypes'),
  { createUserAddressResolver } = require('./resolvers'),
  { userAddressesType } = require('./types');

const createUserAddress = {
  type: userAddressesType,
  args: {
    input: { type: createUserAddressInputType },
  },
  resolve: async (source, args) => await createUserAddressResolver(args),
};

module.exports = {
  createUserAddress,
};
