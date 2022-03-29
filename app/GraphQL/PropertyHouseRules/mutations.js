const { createPropertyHouseRuleInputType } = require('./inputTypes'),
  { createPropertyHouseRuleResolver } = require('./resolvers'),
  { propertyHouseRulesType } = require('./types');

const createPropertyHouseRule = {
  type: propertyHouseRulesType,
  args: {
    input: { type: createPropertyHouseRuleInputType },
  },
  resolve: async (source, args) => await createPropertyHouseRuleResolver(args),
};

module.exports = {
  createPropertyHouseRule,
};
