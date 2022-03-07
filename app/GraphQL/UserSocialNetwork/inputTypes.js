const {
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLInt,
  GraphQLString,
  GraphQLBoolean,
} = require('graphql');

const createUserSocialNetworkInputType = new GraphQLInputObjectType({
  name: 'CreateUserSocialNetworkInput',
  fields: {
    user_id: { type: new GraphQLNonNull(GraphQLInt) },
    social_network_id: { type: new GraphQLNonNull(GraphQLInt) },
    url: { type: new GraphQLNonNull(GraphQLString) },
    is_default: { type: new GraphQLNonNull(GraphQLBoolean) },
    rank: { type: new GraphQLNonNull(GraphQLInt) },
  },
});

module.exports = { createUserSocialNetworkInputType };
