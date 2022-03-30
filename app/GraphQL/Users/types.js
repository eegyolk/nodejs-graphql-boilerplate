const {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLInt,
  GraphQLList,
} = require('graphql');

const { titleEnumType, sexEnumType } = require('./enumTypes');
const { getDeviceIdByUserIdResolver } = require('../Devices/resolvers');
const {
  getUserAddressIdByUserIdResolver,
} = require('../UserAddresses/resolvers');
const { getUserEmailIdByUserIdResolver } = require('../UserEmails/resolvers');
const {
  getUserIdentificationIdByUserIdResolver,
} = require('../UserIdentifications/resolvers');
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
    username: { type: new GraphQLNonNull(GraphQLString) },
    email_address: { type: new GraphQLNonNull(GraphQLString) },
    password: { type: new GraphQLNonNull(GraphQLString) },
    title: { type: new GraphQLNonNull(titleEnumType) },
    firstname: { type: new GraphQLNonNull(GraphQLString) },
    middlename: { type: new GraphQLNonNull(GraphQLString) },
    lastname: { type: new GraphQLNonNull(GraphQLString) },
    suffix: { type: new GraphQLNonNull(GraphQLString) },
    birthdate: { type: GraphQLString },
    age: { type: new GraphQLNonNull(GraphQLInt) },
    sex: { type: new GraphQLNonNull(sexEnumType) },
    photo_url: { type: new GraphQLNonNull(GraphQLString) },
    verification_token: { type: new GraphQLNonNull(GraphQLString) },
    verification_md5: { type: new GraphQLNonNull(GraphQLString) },
    verified_at: { type: GraphQLString },
    remember_token: { type: new GraphQLNonNull(GraphQLString) },
    recovery_token: { type: new GraphQLNonNull(GraphQLString) },
    recovery_md5: { type: new GraphQLNonNull(GraphQLString) },
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
    userIdentificationIds: {
      type: new GraphQLList(GraphQLInt),
      resolve: (source) => getUserIdentificationIdByUserIdResolver(source.id),
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
