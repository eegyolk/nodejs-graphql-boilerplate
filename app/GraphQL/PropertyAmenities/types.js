const {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLInt,
  GraphQLString,
} = require('graphql');

const propertyAmenitiesType = new GraphQLObjectType({
  name: 'PropertyAmenities',
  fields: {
    id: { type: new GraphQLNonNull(GraphQLInt) },
    property_id: { type: new GraphQLNonNull(GraphQLInt) },
    amenity_id: { type: new GraphQLNonNull(GraphQLInt) },
    created_at: { type: new GraphQLNonNull(GraphQLString) },
    updated_at: { type: new GraphQLNonNull(GraphQLString) },
    deleted_at: { type: GraphQLString },
  },
});

module.exports = { propertyAmenitiesType };
