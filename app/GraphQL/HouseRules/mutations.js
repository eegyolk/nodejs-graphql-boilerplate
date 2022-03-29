const { createHouseRuleInputType } = require('./inputTypes'),
  { createHouseRuleResolver } = require('./resolvers'),
  { houseRulesType } = require('./types');

const createHouseRule = {
  type: houseRulesType,
  args: {
    input: { type: createHouseRuleInputType },
  },
  resolve: async (source, args) => await createHouseRuleResolver(args),
};

module.exports = {
  createHouseRule,
};
