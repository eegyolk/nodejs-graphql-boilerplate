const { createPropertyAmenityInputType } = require('./inputTypes'),
  { createPropertyAmenityResolver } = require('./resolvers'),
  { propertyAmenitiesType } = require('./types');

const createPropertyAmenity = {
  type: propertyAmenitiesType,
  args: {
    input: { type: createPropertyAmenityInputType },
  },
  resolve: async (source, args) => await createPropertyAmenityResolver(args),
};

module.exports = {
  createPropertyAmenity,
};
