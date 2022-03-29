const {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
} = require('graphql');

const propertyUtilitiesType = new GraphQLObjectType({
  name: 'PropertyUtilities',
  fields: {
    id: { type: new GraphQLNonNull(GraphQLInt) },
    property_id: { type: new GraphQLNonNull(GraphQLInt) },
    utility_id: { type: new GraphQLNonNull(GraphQLInt) },
    fee: { type: new GraphQLNonNull(GraphQLFloat) },
    created_at: { type: new GraphQLNonNull(GraphQLString) },
    updated_at: { type: new GraphQLNonNull(GraphQLString) },
    deleted_at: { type: GraphQLString },
  },
});

module.exports = { propertyUtilitiesType };
