const {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
} = require('graphql');

const propertyAddressesType = new GraphQLObjectType({
  name: 'PropertyAddresses',
  fields: {
    id: { type: new GraphQLNonNull(GraphQLInt) },
    property_id: { type: new GraphQLNonNull(GraphQLInt) },
    latitude: { type: new GraphQLNonNull(GraphQLFloat) },
    longitude: { type: new GraphQLNonNull(GraphQLFloat) },
    address_line_1: { type: new GraphQLNonNull(GraphQLString) },
    address_line_2: { type: new GraphQLNonNull(GraphQLString) },
    barangay: { type: new GraphQLNonNull(GraphQLString) },
    city_town: { type: new GraphQLNonNull(GraphQLString) },
    state_province: { type: new GraphQLNonNull(GraphQLString) },
    postal_code: { type: new GraphQLNonNull(GraphQLString) },
    country: { type: new GraphQLNonNull(GraphQLString) },
    created_at: { type: new GraphQLNonNull(GraphQLString) },
    updated_at: { type: new GraphQLNonNull(GraphQLString) },
    deleted_at: { type: GraphQLString },
  },
});

module.exports = { propertyAddressesType };
