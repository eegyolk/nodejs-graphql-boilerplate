const {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLInt,
  GraphQLList,
} = require('graphql');

const { getUserEmailIdByUserIdResolver } = require('../UserEmails/resolvers');

const usersType = new GraphQLObjectType({
  name: 'Users',
  fields: {
    id: { type: new GraphQLNonNull(GraphQLInt) },
    name: { type: new GraphQLNonNull(GraphQLString) },
    email_address: { type: new GraphQLNonNull(GraphQLString) },
    username: { type: new GraphQLNonNull(GraphQLString) },
    password: { type: new GraphQLNonNull(GraphQLString) },
    image_url: { type: new GraphQLNonNull(GraphQLString) },
    remember_token: { type: new GraphQLNonNull(GraphQLString) },
    verification_token: { type: new GraphQLNonNull(GraphQLString) },
    recovery_token: { type: new GraphQLNonNull(GraphQLString) },
    created_at: { type: new GraphQLNonNull(GraphQLString) },
    updated_at: { type: new GraphQLNonNull(GraphQLString) },
    deleted_at: { type: GraphQLString },
    userEmailIds: {
      type: new GraphQLList(GraphQLInt),
      resolve: (source) => getUserEmailIdByUserIdResolver(source.id),
    },
  },
});

module.exports = { usersType };
