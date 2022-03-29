const graphqlFields = require('graphql-fields');

const AmenitiesRepository = require('../../Repositories/AmenitiesRepository');

const amenitiesResolver = async (info) => {
  const fields = Object.keys(graphqlFields(info));

  return await AmenitiesRepository.amenities(fields.join(','));
};

const getAmenityResolver = async (id, info) => {
  const fields = Object.keys(graphqlFields(info));

  return await AmenitiesRepository.getAmenity(id, fields.join(','));
};

const createAmenityResolver = async (args) => {
  return await AmenitiesRepository.createAmenity(args.input);
};

module.exports = {
  amenitiesResolver,
  getAmenityResolver,
  createAmenityResolver,
};
