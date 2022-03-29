const {
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLInt,
  GraphQLFloat,
} = require('graphql');
const BigInt = require('graphql-bigint');

const createPropertyUtilityInputType = new GraphQLInputObjectType({
  name: 'CreatePropertyUtilityInput',
  fields: {
    property_id: { type: new GraphQLNonNull(BigInt) },
    utility_id: { type: new GraphQLNonNull(GraphQLInt) },
    fee: { type: new GraphQLNonNull(GraphQLFloat) },
  },
});

module.exports = { createPropertyUtilityInputType };
