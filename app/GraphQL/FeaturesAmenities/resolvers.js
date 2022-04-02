const graphqlFields = require('graphql-fields');

const FeaturesAminitiesRepository = require('../../Repositories/FeaturesAminitiesRepository');

const featuresAminitiesResolver = async (info) => {
  const fields = Object.keys(graphqlFields(info));

  return await FeaturesAminitiesRepository.featuresAminities(fields.join(','));
};

const getFeatureAminityResolver = async (id, info) => {
  const fields = Object.keys(graphqlFields(info));

  return await FeaturesAminitiesRepository.getFeatureAminity(
    id,
    fields.join(',')
  );
};

const createFeatureAminityResolver = async (args) => {
  return await FeaturesAminitiesRepository.createFeatureAminity(args.input);
};

module.exports = {
  featuresAminitiesResolver,
  getFeatureAminityResolver,
  createFeatureAminityResolver,
};
