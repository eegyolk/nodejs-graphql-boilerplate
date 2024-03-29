const {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLInt,
  GraphQLString,
} = require('graphql');
const BigInt = require('graphql-bigint');

const propertyHouseRulesType = new GraphQLObjectType({
  name: 'PropertyHouseRules',
  fields: {
    id: { type: new GraphQLNonNull(BigInt) },
    property_id: { type: new GraphQLNonNull(BigInt) },
    house_rule_id: { type: new GraphQLNonNull(GraphQLInt) },
    created_at: { type: new GraphQLNonNull(GraphQLString) },
    updated_at: { type: new GraphQLNonNull(GraphQLString) },
    deleted_at: { type: GraphQLString },
  },
});

module.exports = { propertyHouseRulesType };
