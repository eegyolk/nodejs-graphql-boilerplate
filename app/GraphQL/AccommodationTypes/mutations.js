const { createAccommodationTypeInputType } = require('./inputTypes'),
  { creatAccommodationTypeResolver } = require('./resolvers'),
  { accommodationTypesType } = require('./types');

const creatAccommodationType = {
  type: accommodationTypesType,
  args: {
    input: { type: createAccommodationTypeInputType },
  },
  resolve: async (source, args) => await creatAccommodationTypeResolver(args),
};

module.exports = {
  creatAccommodationType,
};
