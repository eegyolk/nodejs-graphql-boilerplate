const {
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLInt,
  GraphQLString,
  GraphQLBoolean,
} = require('graphql');

const createFeatureAmenityInputType = new GraphQLInputObjectType({
  name: 'CreateFeatureAmenityInput',
  fields: {
    feature_amenity_type_id: { type: new GraphQLNonNull(GraphQLInt) },
    code: { type: new GraphQLNonNull(GraphQLString) },
    label: { type: new GraphQLNonNull(GraphQLString) },
    description: { type: new GraphQLNonNull(GraphQLString) },
    with_value: { type: new GraphQLNonNull(GraphQLBoolean) },
  },
});

module.exports = { createFeatureAmenityInputType };
