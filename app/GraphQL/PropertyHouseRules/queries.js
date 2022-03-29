const { GraphQLList } = require('graphql');
const BigInt = require('graphql-bigint');

const { propertyHouseRulesType } = require('./types'),
  {
    propertyHouseRulesResolver,
    getPropertyHouseRuleResolver,
  } = require('./resolvers');

const propertyHouseRules = {
  type: new GraphQLList(propertyHouseRulesType),
  resolve: async (source, args, context, info) =>
    await propertyHouseRulesResolver(info),
};

const getPropertyHouseRule = {
  type: propertyHouseRulesType,
  args: {
    id: { type: BigInt },
  },
  resolve: async (source, args, context, info) =>
    await getPropertyHouseRuleResolver(args.id, info),
};

module.exports = {
  propertyHouseRules,
  getPropertyHouseRule,
};
