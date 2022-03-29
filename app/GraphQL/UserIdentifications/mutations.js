const { createUserIdentificationInputType } = require('./inputTypes'),
  { createUserIdentificationResolver } = require('./resolvers'),
  { userIdentificationsType } = require('./types');

const createUserIdentification = {
  type: userIdentificationsType,
  args: {
    input: { type: createUserIdentificationInputType },
  },
  resolve: async (source, args) => await createUserIdentificationResolver(args),
};

module.exports = {
  createUserIdentification,
};
