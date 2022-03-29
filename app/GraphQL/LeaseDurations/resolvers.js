const graphqlFields = require('graphql-fields');

const LeaseDurationsRepository = require('../../Repositories/LeaseDurationsRepository');

const leaseDurationsResolver = async (info) => {
  const fields = Object.keys(graphqlFields(info));

  return await LeaseDurationsRepository.leaseDurations(fields.join(','));
};

const getLeaseDurationResolver = async (id, info) => {
  const fields = Object.keys(graphqlFields(info));

  return await LeaseDurationsRepository.getLeaseDuration(id, fields.join(','));
};

const createLeaseDurationResolver = async (args) => {
  return await LeaseDurationsRepository.createLeaseDuration(args.input);
};

module.exports = {
  leaseDurationsResolver,
  getLeaseDurationResolver,
  createLeaseDurationResolver,
};
