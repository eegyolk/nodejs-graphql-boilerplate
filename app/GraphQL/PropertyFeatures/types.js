const {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLInt,
  GraphQLString,
} = require('graphql');
const BigInt = require('graphql-bigint');

const propertyFeaturesType = new GraphQLObjectType({
  name: 'PropertyFeatures',
  fields: {
    id: { type: new GraphQLNonNull(BigInt) },
    property_id: { type: new GraphQLNonNull(BigInt) },
    feature_id: { type: new GraphQLNonNull(GraphQLInt) },
    value: { type: new GraphQLNonNull(GraphQLInt) },
    created_at: { type: new GraphQLNonNull(GraphQLString) },
    updated_at: { type: new GraphQLNonNull(GraphQLString) },
    deleted_at: { type: GraphQLString },
  },
});

module.exports = { propertyFeaturesType };
