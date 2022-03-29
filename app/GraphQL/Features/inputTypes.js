const {
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLBoolean,
} = require('graphql');

const createFeatureInputType = new GraphQLInputObjectType({
  name: 'CreateFeatureInput',
  fields: {
    code: { type: new GraphQLNonNull(GraphQLString) },
    label: { type: new GraphQLNonNull(GraphQLString) },
    description: { type: new GraphQLNonNull(GraphQLString) },
    with_value: { type: new GraphQLNonNull(GraphQLBoolean) },
  },
});

module.exports = { createFeatureInputType };
