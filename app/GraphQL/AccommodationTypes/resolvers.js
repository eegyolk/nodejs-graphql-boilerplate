const graphqlFields = require('graphql-fields');

const AccommodationTypesRepository = require('../../Repositories/AccommodationTypesRepository');

const accommodationTypesResolver = async (info) => {
  const fields = Object.keys(graphqlFields(info));

  return await AccommodationTypesRepository.accommodationTypes(
    fields.join(',')
  );
};

const getAccommodationTypeResolver = async (id, info) => {
  const fields = Object.keys(graphqlFields(info));

  return await AccommodationTypesRepository.getAccommodationType(
    id,
    fields.join(',')
  );
};

const creatAccommodationTypeResolver = async (args) => {
  return await AccommodationTypesRepository.creatAccommodationType(args.input);
};

module.exports = {
  accommodationTypesResolver,
  getAccommodationTypeResolver,
  creatAccommodationTypeResolver,
};
