const { createEmailTypeInputType } = require('./inputTypes'),
  { createEmailTypeResolver } = require('./resolvers'),
  { emailTypesType } = require('./types');

const createEmailType = {
  type: emailTypesType,
  args: {
    input: { type: createEmailTypeInputType },
  },
  resolve: async (source, args) => await createEmailTypeResolver(args),
};

module.exports = {
  createEmailType,
};
