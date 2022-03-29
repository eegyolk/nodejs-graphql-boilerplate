const graphqlFields = require('graphql-fields');

const PriceSchemeDurationsRepository = require('../../Repositories/PriceSchemeDurationsRepository');

const priceSchemeDurationsResolver = async (info) => {
  const fields = Object.keys(graphqlFields(info));

  return await PriceSchemeDurationsRepository.priceSchemeDurations(
    fields.join(',')
  );
};

const getPriceSchemeDurationResolver = async (id, info) => {
  const fields = Object.keys(graphqlFields(info));

  return await PriceSchemeDurationsRepository.getPriceSchemeDuration(
    id,
    fields.join(',')
  );
};

const createPriceSchemeDurationResolver = async (args) => {
  return await PriceSchemeDurationsRepository.createPriceSchemeDuration(
    args.input
  );
};

module.exports = {
  priceSchemeDurationsResolver,
  getPriceSchemeDurationResolver,
  createPriceSchemeDurationResolver,
};
