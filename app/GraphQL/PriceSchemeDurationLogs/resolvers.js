const graphqlFields = require('graphql-fields');

const PriceSchemeDurationLogsRepository = require('../../Repositories/PriceSchemeDurationLogsRepository');

const priceSchemeDurationLogsResolver = async (info) => {
  const fields = Object.keys(graphqlFields(info));

  return await PriceSchemeDurationLogsRepository.priceSchemeDurationLogs(
    fields.join(',')
  );
};

const getPriceSchemeDurationLogResolver = async (id, info) => {
  const fields = Object.keys(graphqlFields(info));

  return await PriceSchemeDurationLogsRepository.getPriceSchemeDurationLog(
    id,
    fields.join(',')
  );
};

const createPriceSchemeDurationLogResolver = async (args) => {
  return await PriceSchemeDurationLogsRepository.createPriceSchemeDurationLog(
    args.input
  );
};

module.exports = {
  priceSchemeDurationLogsResolver,
  getPriceSchemeDurationLogResolver,
  createPriceSchemeDurationLogResolver,
};
