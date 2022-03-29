const {
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLString,
} = require('graphql');

const createHouseRuleInputType = new GraphQLInputObjectType({
  name: 'CreateHouseRuleInput',
  fields: {
    code: { type: new GraphQLNonNull(GraphQLString) },
    label: { type: new GraphQLNonNull(GraphQLString) },
    description: { type: new GraphQLNonNull(GraphQLString) },
  },
});

module.exports = { createHouseRuleInputType };
