const {
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLInt,
} = require('graphql');

const createPropertyHouseRuleInputType = new GraphQLInputObjectType({
  name: 'CreatePropertyHouseRuleInput',
  fields: {
    property_id: { type: new GraphQLNonNull(GraphQLInt) },
    house_rule_id: { type: new GraphQLNonNull(GraphQLInt) },
  },
});

module.exports = { createPropertyHouseRuleInputType };
