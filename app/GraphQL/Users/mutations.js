const { createUserInputType } = require('./inputTypes'),
  { createUserResolver } = require('./resolvers'),
  { usersType } = require('./types');

const createUser = {
  type: usersType,
  args: {
    input: { type: createUserInputType },
  },
  resolve: async (source, args) => await createUserResolver(args),
};

module.exports = {
  createUser,
};
