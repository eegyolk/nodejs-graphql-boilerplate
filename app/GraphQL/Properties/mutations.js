const { createPropertyInputType } = require('./inputTypes'),
  { createPropertyResolver } = require('./resolvers'),
  { propertiesType } = require('./types');

const createProperty = {
  type: propertiesType,
  args: {
    input: { type: createPropertyInputType },
  },
  resolve: async (source, args) => await createPropertyResolver(args),
};

module.exports = {
  createProperty,
};
