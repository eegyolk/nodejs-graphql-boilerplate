const {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLInt,
  GraphQLList,
} = require('graphql');

const {
  getUserAddressIdByUserIdResolver,
} = require('../UserAddresses/resolvers');
const { getUserEmailIdByUserIdResolver } = require('../UserEmails/resolvers');
const { getUserPhoneIdByUserIdResolver } = require('../UserPhones/resolvers');
const {
  getUserSocialNetworkIdByUserIdResolver,
} = require('../UserSocialNetworks/resolvers');

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
    userAddressIds: {
      type: new GraphQLList(GraphQLInt),
      resolve: (source) => getUserAddressIdByUserIdResolver(source.id),
    },
    userEmailIds: {
      type: new GraphQLList(GraphQLInt),
      resolve: (source) => getUserEmailIdByUserIdResolver(source.id),
    },
    userPhoneIds: {
      type: new GraphQLList(GraphQLInt),
      resolve: (source) => getUserPhoneIdByUserIdResolver(source.id),
    },
    userSocialNetworkIds: {
      type: new GraphQLList(GraphQLInt),
      resolve: (source) => getUserSocialNetworkIdByUserIdResolver(source.id),
    },
  },
});

module.exports = { usersType };
