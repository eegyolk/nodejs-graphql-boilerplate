const graphqlFields = require('graphql-fields');

const PropertyHouseRulesRepository = require('../../Repositories/PropertyHouseRulesRepository');

const propertyHouseRulesResolver = async (info) => {
  const fields = Object.keys(graphqlFields(info));

  return await PropertyHouseRulesRepository.propertyHouseRules(
    fields.join(',')
  );
};

const getPropertyHouseRuleResolver = async (id, info) => {
  const fields = Object.keys(graphqlFields(info));

  return await PropertyHouseRulesRepository.getPropertyHouseRule(
    id,
    fields.join(',')
  );
};

const createPropertyHouseRuleResolver = async (args) => {
  return await PropertyHouseRulesRepository.createPropertyHouseRule(args.input);
};

module.exports = {
  propertyHouseRulesResolver,
  getPropertyHouseRuleResolver,
  createPropertyHouseRuleResolver,
};
