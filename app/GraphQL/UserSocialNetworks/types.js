const graphqlFields = require('graphql-fields');
const {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLInt,
  GraphQLBoolean,
} = require('graphql');

const { socialNetworksType } = require('../SocialNetworks/types');
const { usersType } = require('../Users/types');

const userSocialNetworksType = new GraphQLObjectType({
  name: 'UserSocialNetworks',
  fields: {
    id: { type: new GraphQLNonNull(GraphQLInt) },
    user_id: { type: new GraphQLNonNull(GraphQLInt) },
    user: {
      type: new GraphQLNonNull(usersType),
      resolve: (source, args, { loaders }, info) => {
        const fields = Object.keys(graphqlFields(info));

        return loaders.users.load(`${source.user_id}@${fields.join(',')}`);
      },
    },
    social_network_id: { type: new GraphQLNonNull(GraphQLInt) },
    social_network: {
      type: new GraphQLNonNull(socialNetworksType),
      resolve: (source, args, { loaders }, info) => {
        const fields = Object.keys(graphqlFields(info));

        return loaders.socialNetworks.load(
          `${source.social_network_id}@${fields.join(',')}`
        );
      },
    },
    url: { type: new GraphQLNonNull(GraphQLString) },
    is_default: { type: new GraphQLNonNull(GraphQLBoolean) },
    rank: { type: new GraphQLNonNull(GraphQLInt) },
    created_at: { type: new GraphQLNonNull(GraphQLString) },
    updated_at: { type: new GraphQLNonNull(GraphQLString) },
    deleted_at: { type: GraphQLString },
  },
});

module.exports = { userSocialNetworksType };