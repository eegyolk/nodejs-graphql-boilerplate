const {
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLInt,
} = require('graphql');
const BigInt = require('graphql-bigint');

const createPropertyHouseRuleInputType = new GraphQLInputObjectType({
  name: 'CreatePropertyHouseRuleInput',
  fields: {
    property_id: { type: new GraphQLNonNull(BigInt) },
    house_rule_id: { type: new GraphQLNonNull(GraphQLInt) },
  },
});

module.exports = { createPropertyHouseRuleInputType };
