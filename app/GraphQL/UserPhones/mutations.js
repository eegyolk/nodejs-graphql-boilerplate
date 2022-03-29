const { createUserPhoneInputType } = require('./inputTypes'),
  { createUserPhoneResolver } = require('./resolvers'),
  { userPhonesType } = require('./types');

const createUserPhone = {
  type: userPhonesType,
  args: {
    input: { type: createUserPhoneInputType },
  },
  resolve: async (source, args) => await createUserPhoneResolver(args),
};

module.exports = {
  createUserPhone,
};
