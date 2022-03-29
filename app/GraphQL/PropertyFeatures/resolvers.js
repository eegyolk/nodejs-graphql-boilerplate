const graphqlFields = require('graphql-fields');

const PropertyFeaturesRepository = require('../../Repositories/PropertyFeaturesRepository');

const propertyFeaturesResolver = async (info) => {
  const fields = Object.keys(graphqlFields(info));

  return await PropertyFeaturesRepository.propertyFeatures(fields.join(','));
};

const getPropertyFeatureResolver = async (id, info) => {
  const fields = Object.keys(graphqlFields(info));

  return await PropertyFeaturesRepository.getPropertyFeature(
    id,
    fields.join(',')
  );
};

const createPropertyFeatureResolver = async (args) => {
  return await PropertyFeaturesRepository.createPropertyFeature(args.input);
};

module.exports = {
  propertyFeaturesResolver,
  getPropertyFeatureResolver,
  createPropertyFeatureResolver,
};
