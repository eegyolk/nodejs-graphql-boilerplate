const { GraphQLObjectType, GraphQLList } = require('graphql');

const activityLogsType = require('./Types/activityLogsType');
const addressTypesType = require('./Types/addressTypesType');
const appModulesType = require('./Types/appModulesType');
const devicesType = require('./Types/devicesType');
const emailTypesType = require('./Types/emailTypesType');
const personasType = require('./Types/personasType');
const phoneTypesType = require('./Types/phoneTypesType');
const roleAppModulePermissionsType = require('./Types/roleAppModulePermissionsType');
const rolesType = require('./Types/rolesType');
const socialNetworksType = require('./Types/socialNetworksType');
const userAddressesType = require('./Types/userAddressesType');
const userEmailsType = require('./Types/userEmailsType');
const userPersonasType = require('./Types/userPersonasType');
const userPhonesType = require('./Types/userPhonesType');
const userRolesType = require('./Types/userRolesType');
const userSocialNetworksType = require('./Types/userSocialNetworksType');
const usersType = require('./Types/usersType');

const activityLogsResolver = require('./Resolvers/activityLogsResolver');
const addressTypesResolver = require('./Resolvers/addressTypesResolver');
const appModulesResolver = require('./Resolvers/appModulesResolver');
const devicesResolver = require('./Resolvers/devicesResolver');
const emailTypesResolver = require('./Resolvers/emailTypesResolver');
const personasResolver = require('./Resolvers/personasResolver');
const phoneTypesResolver = require('./Resolvers/phoneTypesResolver');
const roleAppModulePermissionsResolver = require('./Resolvers/roleAppModulePermissionsResolver');
const rolesResolver = require('./Resolvers/rolesResolver');
const socialNetworksResolver = require('./Resolvers/socialNetworksResolver');
const userAddressesResolver = require('./Resolvers/userAddressesResolver');
const userEmailsResolver = require('./Resolvers/userEmailsResolver');
const userPersonasResolver = require('./Resolvers/userPersonasResolver');
const userPhonesResolver = require('./Resolvers/userPhonesResolver');
const userRolesRosolver = require('./Resolvers/userRolesRosolver');
const userSocialNetworksResolver = require('./Resolvers/userSocialNetworksResolver');
const usersResolver = require('./Resolvers/usersResolver');

const queries = new GraphQLObjectType({
  name: 'Query',
  fields: {
    activityLogs: {
      type: new GraphQLList(activityLogsType),
      resolve: async () => await activityLogsResolver.getActivityLogs(),
    },
    addressTypes: {
      type: new GraphQLList(addressTypesType),
      resolve: async () => await addressTypesResolver.getAddressTypes(),
    },
    appModules: {
      type: new GraphQLList(appModulesType),
      resolve: async () => await appModulesResolver.getAppModules(),
    },
    devices: {
      type: new GraphQLList(devicesType),
      resolve: async () => await devicesResolver.getDevices(),
    },
    emailTypes: {
      type: new GraphQLList(emailTypesType),
      resolve: async () => await emailTypesResolver.getEmailTypes(),
    },
    personas: {
      type: new GraphQLList(personasType),
      resolve: async () => await personasResolver.getPersonas(),
    },
    phoneTypes: {
      type: new GraphQLList(phoneTypesType),
      resolve: async () => await phoneTypesResolver.getPhoneTypes(),
    },
    roleAppModulePermissions: {
      type: new GraphQLList(roleAppModulePermissionsType),
      resolve: async () =>
        await roleAppModulePermissionsResolver.getRoleAppModulePermissions(),
    },
    roles: {
      type: new GraphQLList(rolesType),
      resolve: async () => await rolesResolver.getRoles(),
    },
    socialNetworks: {
      type: new GraphQLList(socialNetworksType),
      resolve: async () => await socialNetworksResolver.getSocialNetworks(),
    },
    userAddresses: {
      type: new GraphQLList(userAddressesType),
      resolve: async () => await userAddressesResolver.getUserAddresses(),
    },
    userEmails: {
      type: new GraphQLList(userEmailsType),
      resolve: async () => await userEmailsResolver.getUserEmails(),
    },
    userPersonas: {
      type: new GraphQLList(userPersonasType),
      resolve: async () => await userPersonasResolver.getUserPersonas(),
    },
    userPhones: {
      type: new GraphQLList(userPhonesType),
      resolve: async () => await userPhonesResolver.getUserPhones(),
    },
    userRoles: {
      type: new GraphQLList(userRolesType),
      resolve: async () => await userRolesRosolver.getUserRoles(),
    },
    userSocialNetworks: {
      type: new GraphQLList(userSocialNetworksType),
      resolve: async () =>
        await userSocialNetworksResolver.getUserSocialNetworks(),
    },
    users: {
      type: new GraphQLList(usersType),
      resolve: async () => await usersResolver.getUsers(),
    },
  },
});

module.exports = queries;
