const {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLInt,
  GraphQLString,
} = require('graphql');

const propertyVerificationsType = new GraphQLObjectType({
  name: 'PropertyVerifications',
  fields: {
    id: { type: new GraphQLNonNull(GraphQLInt) },
    property_id: { type: new GraphQLNonNull(GraphQLInt) },
    remarks: { type: new GraphQLNonNull(GraphQLString) },
    notes: { type: new GraphQLNonNull(GraphQLString) },
    created_at: { type: new GraphQLNonNull(GraphQLString) },
    updated_at: { type: new GraphQLNonNull(GraphQLString) },
    deleted_at: { type: GraphQLString },
  },
});

module.exports = { propertyVerificationsType };
