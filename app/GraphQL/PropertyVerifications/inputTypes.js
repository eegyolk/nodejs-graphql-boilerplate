const {
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLInt,
  GraphQLString,
} = require('graphql');
const BigInt = require('graphql-bigint');

const createPropertyVerificationInputType = new GraphQLInputObjectType({
  name: 'CreatePropertyVerificationInput',
  fields: {
    property_id: { type: new GraphQLNonNull(BigInt) },
    remarks: { type: new GraphQLNonNull(GraphQLString) },
    notes: { type: new GraphQLNonNull(GraphQLString) },
  },
});

module.exports = { createPropertyVerificationInputType };
