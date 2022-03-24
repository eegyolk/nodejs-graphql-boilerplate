const {
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLBoolean,
  GraphQLInt,
} = require('graphql');

const createIdentificationTypeInputType = new GraphQLInputObjectType({
  name: 'CreateIdentificationTypeInput',
  fields: {
    code: { type: new GraphQLNonNull(GraphQLString) },
    label: { type: new GraphQLNonNull(GraphQLString) },
    description: { type: new GraphQLNonNull(GraphQLString) },
    is_default: { type: new GraphQLNonNull(GraphQLBoolean) },
    required_images_count: { type: new GraphQLNonNull(GraphQLInt) },
  },
});

module.exports = { createIdentificationTypeInputType };
