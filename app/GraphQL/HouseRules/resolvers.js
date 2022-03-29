const graphqlFields = require('graphql-fields');

const HouseRulesRepository = require('../../Repositories/HouseRulesRepository');

const houseRulesResolver = async (info) => {
  const fields = Object.keys(graphqlFields(info));

  return await HouseRulesRepository.houseRules(fields.join(','));
};

const getHouseRuleResolver = async (id, info) => {
  const fields = Object.keys(graphqlFields(info));

  return await HouseRulesRepository.getHouseRule(id, fields.join(','));
};

const createHouseRuleResolver = async (args) => {
  return await HouseRulesRepository.createHouseRule(args.input);
};

module.exports = {
  houseRulesResolver,
  getHouseRuleResolver,
  createHouseRuleResolver,
};
