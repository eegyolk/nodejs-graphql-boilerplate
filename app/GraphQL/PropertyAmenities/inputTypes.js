const {
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLInt,
} = require('graphql');

const createPropertyAmenityInputType = new GraphQLInputObjectType({
  name: 'CreatePropertyAmenityInput',
  fields: {
    property_id: { type: new GraphQLNonNull(GraphQLInt) },
    amenity_id: { type: new GraphQLNonNull(GraphQLInt) },
  },
});

module.exports = { createPropertyAmenityInputType };
