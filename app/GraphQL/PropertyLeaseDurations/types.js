const {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLInt,
  GraphQLString,
  GraphQLFloat,
} = require('graphql');

const propertyLeaseDurationsType = new GraphQLObjectType({
  name: 'PropertyLeaseDurations',
  fields: {
    id: { type: new GraphQLNonNull(GraphQLInt) },
    property_id: { type: new GraphQLNonNull(GraphQLInt) },
    lease_duration_id: { type: new GraphQLNonNull(GraphQLInt) },
    fee: { type: new GraphQLNonNull(GraphQLFloat) },
    created_at: { type: new GraphQLNonNull(GraphQLString) },
    updated_at: { type: new GraphQLNonNull(GraphQLString) },
    deleted_at: { type: GraphQLString },
  },
});

module.exports = { propertyLeaseDurationsType };
