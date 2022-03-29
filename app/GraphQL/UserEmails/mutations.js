const { createUserEmailInputType } = require('./inputTypes'),
  { createUserEmailResolver } = require('./resolvers'),
  { userEmailsType } = require('./types');

const createUserEmail = {
  type: userEmailsType,
  args: {
    input: { type: createUserEmailInputType },
  },
  resolve: async (source, args) => await createUserEmailResolver(args),
};

module.exports = {
  createUserEmail,
};
