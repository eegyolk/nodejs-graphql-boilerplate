const graphqlFields = require('graphql-fields');

const PriceDurationsRepository = require('../../Repositories/PriceDurationsRepository');

const priceDurationsResolver = async (info) => {
  const fields = Object.keys(graphqlFields(info));

  return await PriceDurationsRepository.priceDurations(fields.join(','));
};

const getPriceDurationResolver = async (id, info) => {
  const fields = Object.keys(graphqlFields(info));

  return await PriceDurationsRepository.getPriceDuration(id, fields.join(','));
};

const createPriceDurationResolver = async (args) => {
  return await PriceDurationsRepository.createPriceDuration(args.input);
};

module.exports = {
  priceDurationsResolver,
  getPriceDurationResolver,
  createPriceDurationResolver,
};
