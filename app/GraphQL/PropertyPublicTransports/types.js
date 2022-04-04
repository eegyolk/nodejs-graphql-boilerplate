const {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLInt,
  GraphQLString,
} = require('graphql');
const BigInt = require('graphql-bigint');

const propertyPublicTransportsType = new GraphQLObjectType({
  name: 'PropertyPublicTransports',
  fields: {
    id: { type: new GraphQLNonNull(BigInt) },
    property_id: { type: new GraphQLNonNull(BigInt) },
    public_transport_id: { type: new GraphQLNonNull(GraphQLInt) },
    created_at: { type: new GraphQLNonNull(GraphQLString) },
    updated_at: { type: new GraphQLNonNull(GraphQLString) },
    deleted_at: { type: GraphQLString },
  },
});

module.exports = { propertyPublicTransportsType };
