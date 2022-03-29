const graphqlFields = require('graphql-fields');

const PriceSchemeFeaturesRepository = require('../../Repositories/PriceSchemeFeaturesRepository');

const priceSchemeFeaturesResolver = async (info) => {
  const fields = Object.keys(graphqlFields(info));

  return await PriceSchemeFeaturesRepository.priceSchemeFeatures(
    fields.join(',')
  );
};

const getPriceSchemeFeatureResolver = async (id, info) => {
  const fields = Object.keys(graphqlFields(info));

  return await PriceSchemeFeaturesRepository.getPriceSchemeFeature(
    id,
    fields.join(',')
  );
};

const createPriceSchemeFeatureResolver = async (args) => {
  return await PriceSchemeFeaturesRepository.createPriceSchemeFeature(
    args.input
  );
};

module.exports = {
  priceSchemeFeaturesResolver,
  getPriceSchemeFeatureResolver,
  createPriceSchemeFeatureResolver,
};
