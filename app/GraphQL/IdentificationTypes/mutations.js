const { createIdentificationTypeInputType } = require('./inputTypes'),
  { createIdentificationTypeResolver } = require('./resolvers'),
  { identificationTypesType } = require('./types');

const createIdentificationType = {
  type: identificationTypesType,
  args: {
    input: { type: createIdentificationTypeInputType },
  },
  resolve: async (source, args) => await createIdentificationTypeResolver(args),
};

module.exports = {
  createIdentificationType,
};
