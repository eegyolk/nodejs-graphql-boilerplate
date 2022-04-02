const {
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLString,
} = require('graphql');

const createFeatureAmenityTypeInputType = new GraphQLInputObjectType({
  name: 'CreateFeatureAmenityTypeInput',
  fields: {
    code: { type: new GraphQLNonNull(GraphQLString) },
    label: { type: new GraphQLNonNull(GraphQLString) },
    description: { type: new GraphQLNonNull(GraphQLString) },
  },
});

module.exports = { createFeatureAmenityTypeInputType };
