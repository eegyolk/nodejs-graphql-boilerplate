const { createPhoneTypeInputType } = require('./inputTypes'),
  { createPhoneTypeResolver } = require('./resolvers'),
  { phoneTypesType } = require('./types');

const createPhoneType = {
  type: phoneTypesType,
  args: {
    input: { type: createPhoneTypeInputType },
  },
  resolve: async (source, args) => await createPhoneTypeResolver(args),
};

module.exports = {
  createPhoneType,
};
