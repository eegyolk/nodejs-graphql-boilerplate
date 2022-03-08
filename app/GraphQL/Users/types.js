const {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLInt,
  GraphQLList,
} = require('graphql');

const { getDeviceIdByUserIdResolver } = require('../Devices/resolvers');
const {
  getUserAddressIdByUserIdResolver,
} = require('../UserAddresses/resolvers');
const { getUserEmailIdByUserIdResolver } = require('../UserEmails/resolvers');
const {
  getUserPersonaIdByUserIdResolver,
} = require('../UserPersonas/resolvers');
const { getUserPhoneIdByUserIdResolver } = require('../UserPhones/resolvers');
const { getUserRoleIdByUserIdResolver } = require('../UserRoles/resolvers');
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
    deviceIds: {
      type: new GraphQLList(GraphQLInt),
      resolve: (source) => getDeviceIdByUserIdResolver(source.id),
    },
    userAddressIds: {
      type: new GraphQLList(GraphQLInt),
      resolve: (source) => getUserAddressIdByUserIdResolver(source.id),
    },
    userEmailIds: {
      type: new GraphQLList(GraphQLInt),
      resolve: (source) => getUserEmailIdByUserIdResolver(source.id),
    },
    userPersonaIds: {
      type: new GraphQLList(GraphQLInt),
      resolve: (source) => getUserPersonaIdByUserIdResolver(source.id),
    },
    userPhoneIds: {
      type: new GraphQLList(GraphQLInt),
      resolve: (source) => getUserPhoneIdByUserIdResolver(source.id),
    },
    userRoleIds: {
      type: new GraphQLList(GraphQLInt),
      resolve: (source) => getUserRoleIdByUserIdResolver(source.id),
    },
    userSocialNetworkIds: {
      type: new GraphQLList(GraphQLInt),
      resolve: (source) => getUserSocialNetworkIdByUserIdResolver(source.id),
    },
  },
});

module.exports = { usersType };
