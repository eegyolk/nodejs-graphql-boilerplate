const { GraphQLList, GraphQLInt } = require('graphql');

const { houseRulesType } = require('./types'),
  { houseRulesResolver, getHouseRuleResolver } = require('./resolvers');

const houseRules = {
  type: new GraphQLList(houseRulesType),
  resolve: async (source, args, context, info) =>
    await houseRulesResolver(info),
};

const getHouseRule = {
  type: houseRulesType,
  args: {
    id: { type: GraphQLInt },
  },
  resolve: async (source, args, context, info) =>
    await getHouseRuleResolver(args.id, info),
};

module.exports = {
  houseRules,
  getHouseRule,
};
