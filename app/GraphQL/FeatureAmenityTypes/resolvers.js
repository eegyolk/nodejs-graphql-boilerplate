const graphqlFields = require('graphql-fields');

const FeatureAmenityTypesRepository = require('../../Repositories/FeatureAmenityTypesRepository');

const featureAmenityTypesResolver = async (info) => {
  const fields = Object.keys(graphqlFields(info));

  return await FeatureAmenityTypesRepository.featureAmenityTypes(
    fields.join(',')
  );
};

const getFeatureAmenityTypeResolver = async (id, info) => {
  const fields = Object.keys(graphqlFields(info));

  return await FeatureAmenityTypesRepository.getFeatureAmenityType(
    id,
    fields.join(',')
  );
};

const createFeatureAmenityTypeResolver = async (args) => {
  return await FeatureAmenityTypesRepository.createFeatureAmenityType(
    args.input
  );
};

module.exports = {
  featureAmenityTypesResolver,
  getFeatureAmenityTypeResolver,
  createFeatureAmenityTypeResolver,
};
