const graphqlFields = require('graphql-fields');

const FeaturesRepository = require('../../Repositories/FeaturesRepository');

const featuresResolver = async (info) => {
  const fields = Object.keys(graphqlFields(info));

  return await FeaturesRepository.features(fields.join(','));
};

const getFeatureResolver = async (id, info) => {
  const fields = Object.keys(graphqlFields(info));

  return await FeaturesRepository.getFeature(id, fields.join(','));
};

const createFeatureResolver = async (args) => {
  return await FeaturesRepository.createFeature(args.input);
};

module.exports = {
  featuresResolver,
  getFeatureResolver,
  createFeatureResolver,
};
