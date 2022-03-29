const { createAmenityInputType } = require('./inputTypes'),
  { createAmenityResolver } = require('./resolvers'),
  { amenitiesType } = require('./types');

const createAmenity = {
  type: amenitiesType,
  args: {
    input: { type: createAmenityInputType },
  },
  resolve: async (source, args) => await createAmenityResolver(args),
};

module.exports = {
  createAmenity,
};
