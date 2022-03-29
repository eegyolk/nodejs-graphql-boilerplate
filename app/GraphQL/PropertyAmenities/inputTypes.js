const {
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLInt,
} = require('graphql');
const BigInt = require('graphql-bigint');

const createPropertyAmenityInputType = new GraphQLInputObjectType({
  name: 'CreatePropertyAmenityInput',
  fields: {
    property_id: { type: new GraphQLNonNull(BigInt) },
    amenity_id: { type: new GraphQLNonNull(GraphQLInt) },
  },
});

module.exports = { createPropertyAmenityInputType };
