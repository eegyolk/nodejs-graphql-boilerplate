const { GraphQLList, GraphQLInt } = require('graphql');

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
    id: { type: GraphQLInt },
  },
  resolve: async (source, args, context, info) =>
    await getPropertyHouseRuleResolver(args.id, info),
};

module.exports = {
  propertyHouseRules,
  getPropertyHouseRule,
};
