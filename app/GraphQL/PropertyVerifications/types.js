const { GraphQLObjectType, GraphQLNonNull, GraphQLString } = require('graphql');
const BigInt = require('graphql-bigint');

const propertyVerificationsType = new GraphQLObjectType({
  name: 'PropertyVerifications',
  fields: {
    id: { type: new GraphQLNonNull(BigInt) },
    property_id: { type: new GraphQLNonNull(BigInt) },
    remarks: { type: new GraphQLNonNull(GraphQLString) },
    notes: { type: new GraphQLNonNull(GraphQLString) },
    created_at: { type: new GraphQLNonNull(GraphQLString) },
    updated_at: { type: new GraphQLNonNull(GraphQLString) },
    deleted_at: { type: GraphQLString },
  },
});

module.exports = { propertyVerificationsType };
