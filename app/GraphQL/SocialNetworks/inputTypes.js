const {
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLBoolean,
} = require('graphql');

const createSocialNetworkInputType = new GraphQLInputObjectType({
  name: 'CreateSocialNetwork',
  fields: {
    code: { type: new GraphQLNonNull(GraphQLString) },
    label: { type: new GraphQLNonNull(GraphQLString) },
    description: { type: new GraphQLNonNull(GraphQLString) },
    is_default: { type: new GraphQLNonNull(GraphQLBoolean) },
    logo_url: { type: new GraphQLNonNull(GraphQLString) },
  },
});

module.exports = { createSocialNetworkInputType };
