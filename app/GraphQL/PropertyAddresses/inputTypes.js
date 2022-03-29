const {
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
} = require('graphql');
const BigInt = require('graphql-bigint');

const createPropertyAddressInputType = new GraphQLInputObjectType({
  name: 'CreatePropertyAddressInput',
  fields: {
    property_id: { type: new GraphQLNonNull(BigInt) },
    latitude: { type: new GraphQLNonNull(GraphQLFloat) },
    longitude: { type: new GraphQLNonNull(GraphQLFloat) },
    address_line_1: { type: new GraphQLNonNull(GraphQLString) },
    address_line_2: { type: new GraphQLNonNull(GraphQLString) },
    barangay: { type: new GraphQLNonNull(GraphQLString) },
    city_town: { type: new GraphQLNonNull(GraphQLString) },
    state_province: { type: new GraphQLNonNull(GraphQLString) },
    postal_code: { type: new GraphQLNonNull(GraphQLString) },
    country: { type: new GraphQLNonNull(GraphQLString) },
  },
});

module.exports = { createPropertyAddressInputType };
