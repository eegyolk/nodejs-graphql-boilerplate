const {
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLInt,
  GraphQLFloat,
} = require('graphql');
const BigInt = require('graphql-bigint');

const createPropertyLeaseDurationInputType = new GraphQLInputObjectType({
  name: 'CreatePropertyLeaseDurationInput',
  fields: {
    property_id: { type: new GraphQLNonNull(BigInt) },
    lease_duration_id: { type: new GraphQLNonNull(GraphQLInt) },
    fee: { type: new GraphQLNonNull(GraphQLFloat) },
  },
});

module.exports = { createPropertyLeaseDurationInputType };
