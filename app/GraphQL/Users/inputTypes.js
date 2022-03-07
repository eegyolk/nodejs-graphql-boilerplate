const {
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLString,
} = require('graphql');

const createUserInputType = new GraphQLInputObjectType({
  name: 'CreateUserInput',
  fields: {
    name: { type: new GraphQLNonNull(GraphQLString) },
    email_address: { type: new GraphQLNonNull(GraphQLString) },
    username: { type: new GraphQLNonNull(GraphQLString) },
    password: { type: new GraphQLNonNull(GraphQLString) },
    image_url: { type: new GraphQLNonNull(GraphQLString) },
    remember_token: { type: new GraphQLNonNull(GraphQLString) },
    verification_token: { type: new GraphQLNonNull(GraphQLString) },
    recovery_token: { type: new GraphQLNonNull(GraphQLString) },
  },
});

module.exports = { createUserInputType };
