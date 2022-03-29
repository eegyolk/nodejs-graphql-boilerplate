const { createPersonaInputType } = require('./inputTypes'),
  { createPersonaResolver } = require('./resolvers'),
  { personasType } = require('./types');

const createPersona = {
  type: personasType,
  args: {
    input: { type: createPersonaInputType },
  },
  resolve: async (source, args) => await createPersonaResolver(args),
};

module.exports = {
  createPersona,
};
