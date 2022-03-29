const graphqlFields = require('graphql-fields');

const PropertyAmenitiesRepository = require('../../Repositories/PropertyAmenitiesRepository');

const propertyAmenitiesResolver = async (info) => {
  const fields = Object.keys(graphqlFields(info));

  return await PropertyAmenitiesRepository.propertyAmenities(fields.join(','));
};

const getPropertyAmenityResolver = async (id, info) => {
  const fields = Object.keys(graphqlFields(info));

  return await PropertyAmenitiesRepository.getPropertyAmenity(
    id,
    fields.join(',')
  );
};

const createPropertyAmenityResolver = async (args) => {
  return await PropertyAmenitiesRepository.createPropertyAmenity(args.input);
};

module.exports = {
  propertyAmenitiesResolver,
  getPropertyAmenityResolver,
  createPropertyAmenityResolver,
};
