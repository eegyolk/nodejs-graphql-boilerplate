const { createUserPersonaInputType } = require('./inputTypes'),
  { createUserPersonaResolver } = require('./resolvers'),
  { userPersonasType } = require('./types');

const createUserPersona = {
  type: userPersonasType,
  args: {
    input: { type: createUserPersonaInputType },
  },
  resolve: async (source, args) => await createUserPersonaResolver(args),
};

module.exports = {
  createUserPersona,
};
