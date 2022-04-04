const {
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLInt,
} = require('graphql');
const BigInt = require('graphql-bigint');

const createPropertyPublicTransportInputType = new GraphQLInputObjectType({
  name: 'CreatePropertyPublicTransportInput',
  fields: {
    property_id: { type: new GraphQLNonNull(BigInt) },
    public_transport_id: { type: new GraphQLNonNull(GraphQLInt) },
  },
});

module.exports = { createPropertyPublicTransportInputType };
