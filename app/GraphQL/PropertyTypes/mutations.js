const { createPropertyTypeInputType } = require('./inputTypes'),
  { createPropertyTypeResolver } = require('./resolvers'),
  { propertyTypesType } = require('./types');

const createPropertyType = {
  type: propertyTypesType,
  args: {
    input: { type: createPropertyTypeInputType },
  },
  resolve: async (source, args) => await createPropertyTypeResolver(args),
};

module.exports = {
  createPropertyType,
};
