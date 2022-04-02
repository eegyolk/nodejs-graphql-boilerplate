const {
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLInt,
} = require('graphql');
const BigInt = require('graphql-bigint');

const createPropertyFeatureAmenityInputType = new GraphQLInputObjectType({
  name: 'CreatePropertyFeatureAmenityInput',
  fields: {
    property_id: { type: new GraphQLNonNull(BigInt) },
    feature_amenity_id: { type: new GraphQLNonNull(GraphQLInt) },
    value: { type: new GraphQLNonNull(GraphQLInt) },
  },
});

module.exports = { createPropertyFeatureAmenityInputType };
