const graphqlFields = require('graphql-fields');

const UtilitiesRepository = require('../../Repositories/UtilitiesRepository');

const utilitiesResolver = async (info) => {
  const fields = Object.keys(graphqlFields(info));

  return await UtilitiesRepository.utilities(fields.join(','));
};

const getUtilityResolver = async (id, info) => {
  const fields = Object.keys(graphqlFields(info));

  return await UtilitiesRepository.getUtility(id, fields.join(','));
};

const createUtilityResolver = async (args) => {
  return await UtilitiesRepository.createUtility(args.input);
};

module.exports = {
  utilitiesResolver,
  getUtilityResolver,
  createUtilityResolver,
};
