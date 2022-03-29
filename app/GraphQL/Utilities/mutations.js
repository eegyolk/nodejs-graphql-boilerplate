const { createUtilityInputType } = require('./inputTypes'),
  { createUtilityResolver } = require('./resolvers'),
  { utilitiesType } = require('./types');

const createUtility = {
  type: utilitiesType,
  args: {
    input: { type: createUtilityInputType },
  },
  resolve: async (source, args) => await createUtilityResolver(args),
};

module.exports = {
  createUtility,
};
