const { createPersonaIdentificationTypeInputType } = require('./inputTypes'),
  { createPersonaIdentificationTypeResolver } = require('./resolvers'),
  { personaIdentificationTypesType } = require('./types');

const createPersonaIdentificationType = {
  type: personaIdentificationTypesType,
  args: {
    input: { type: createPersonaIdentificationTypeInputType },
  },
  resolve: async (source, args) =>
    await createPersonaIdentificationTypeResolver(args),
};

module.exports = {
  createPersonaIdentificationType,
};
