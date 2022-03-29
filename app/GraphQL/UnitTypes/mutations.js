const { createUnitTypeInputType } = require('./inputTypes'),
  { createUnitTypeResolver } = require('./resolvers'),
  { unitTypesType } = require('./types');

const createUnitType = {
  type: unitTypesType,
  args: {
    input: { type: createUnitTypeInputType },
  },
  resolve: async (source, args) => await createUnitTypeResolver(args),
};

module.exports = {
  createUnitType,
};
