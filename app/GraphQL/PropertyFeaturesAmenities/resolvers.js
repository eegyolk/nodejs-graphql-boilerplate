const graphqlFields = require('graphql-fields');

const PropertyFeaturesAmenitiesRepository = require('../../Repositories/PropertyFeaturesAmenitiesRepository');

const propertyFeaturesAmenitiesResolver = async (info) => {
  const fields = Object.keys(graphqlFields(info));

  return await PropertyFeaturesAmenitiesRepository.propertyFeaturesAmenities(
    fields.join(',')
  );
};

const getPropertyFeatureAmenityResolver = async (id, info) => {
  const fields = Object.keys(graphqlFields(info));

  return await PropertyFeaturesAmenitiesRepository.getPropertyFeatureAmenity(
    id,
    fields.join(',')
  );
};

const createPropertyFeatureAmenityResolver = async (args) => {
  return await PropertyFeaturesAmenitiesRepository.createPropertyFeatureAmenity(
    args.input
  );
};

module.exports = {
  propertyFeaturesAmenitiesResolver,
  getPropertyFeatureAmenityResolver,
  createPropertyFeatureAmenityResolver,
};
