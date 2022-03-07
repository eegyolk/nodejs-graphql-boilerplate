const {
  GraphQLObjectType,
  GraphQLList,
  GraphQLInt,
  GraphQLString,
} = require('graphql');

const { activityLogsType } = require('./ActivityLogs/types'),
  {
    activityLogsResolver,
    getActivityLogResolver,
  } = require('./ActivityLogs/resolvers');

const { addressTypesType } = require('./AddressTypes/types'),
  {
    addressTypesResolver,
    getAddressTypeResolver,
  } = require('./AddressTypes/resolvers');

const { appModulesType } = require('./AppModules/types'),
  {
    appModulesResolver,
    getAppModuleResolver,
  } = require('./AppModules/resolvers');

const { devicesType } = require('./Devices/types'),
  { devicesResolver, getDeviceResolver } = require('./Devices/resolvers');

const { emailTypesType } = require('./EmailTypes/types'),
  {
    emailTypesResolvers,
    getEmailTypeResolvers,
  } = require('./EmailTypes/resolvers');

const { personasType } = require('./Personas/types'),
  { personasResolver, getPersonaResolver } = require('./Personas/resolvers');

const { phoneTypesType } = require('./PhoneTypes/types'),
  {
    phoneTypesResolver,
    getPhoneTypeResolver,
  } = require('./PhoneTypes/resolvers');

const {
    roleAppModulePermissionsType,
  } = require('./RoleAppModulePermissions/types'),
  {
    roleAppModulePermissionsResolver,
    getRoleAppModulePermissionResolver,
  } = require('./RoleAppModulePermissions/resolvers');

const { rolesType } = require('./Roles/types'),
  { rolesResolver, getRoleResolver } = require('./Roles/resolvers');

const { socialNetworksType } = require('./SocialNetworks/types'),
  {
    socialNetworksResolver,
    getSocialNetworkResolver,
  } = require('./SocialNetworks/resolvers');

const { userAddressesType } = require('./UserAddresses/types'),
  {
    userAddressesResolver,
    getUserAddressResolver,
  } = require('./UserAddresses/resolvers');

const { userEmailsType } = require('./UserEmails/types'),
  {
    userEmailsResolver,
    getUserEmailResolver,
  } = require('./UserEmails/resolvers');

const { userPersonasType } = require('./UserPersonas/types'),
  {
    userPersonasResolver,
    getUserPersonaResolver,
  } = require('./UserPersonas/resolvers');

const { userPhonesType } = require('./UserPhones/types'),
  {
    userPhonesResolver,
    getUserPhoneResolver,
  } = require('./UserPhones/resolvers');

const { userRolesType } = require('./UserRoles/types'),
  { userRolesResolver, getUserRoleResolver } = require('./UserRoles/resolvers');

const { usersType } = require('./Users/types'),
  { usersResolver, getUserResolver } = require('./Users/resolvers');

const { userSocialNetworksType } = require('./UserSocialNetwork/types'),
  {
    userSocialNetworksResolver,
    getUserSocialNetworkResolver,
  } = require('./UserSocialNetwork/resolvers');

const queries = new GraphQLObjectType({
  name: 'Queries',
  fields: {
    activityLogs: {
      type: new GraphQLList(activityLogsType),
      resolve: async () => await activityLogsResolver(),
    },
    getActivityLog: {
      type: activityLogsType,
      args: {
        id: { type: GraphQLString },
      },
      resolve: async (source, args) => await getActivityLogResolver(args.id),
    },

    addressTypes: {
      type: new GraphQLList(addressTypesType),
      resolve: async () => await addressTypesResolver(),
    },
    getAddressType: {
      type: addressTypesType,
      args: {
        id: { type: GraphQLInt },
      },
      resolve: async (source, args) => await getAddressTypeResolver(args.id),
    },

    appModules: {
      type: new GraphQLList(appModulesType),
      resolve: async () => await appModulesResolver(),
    },
    getAppModule: {
      type: appModulesType,
      args: {
        id: { type: GraphQLInt },
      },
      resolve: async (source, args) => await getAppModuleResolver(args.id),
    },

    devices: {
      type: new GraphQLList(devicesType),
      resolve: async () => await devicesResolver(),
    },
    getDevice: {
      type: devicesType,
      args: {
        id: { type: GraphQLInt },
      },
      resolve: async (source, args) => await getDeviceResolver(args.id),
    },

    emailTypes: {
      type: new GraphQLList(emailTypesType),
      resolve: async () => await emailTypesResolvers(),
    },
    getEmailType: {
      type: emailTypesType,
      args: {
        id: { type: GraphQLInt },
      },
      resolve: async (source, args) => await getEmailTypeResolvers(args.id),
    },

    personas: {
      type: new GraphQLList(personasType),
      resolve: async () => await personasResolver(),
    },
    getPersona: {
      type: personasType,
      args: {
        id: { type: GraphQLInt },
      },
      resolve: async (source, args) => await getPersonaResolver(args.id),
    },

    phoneTypes: {
      type: new GraphQLList(phoneTypesType),
      resolve: async () => await phoneTypesResolver(),
    },
    getPhoneType: {
      type: phoneTypesType,
      args: {
        id: { type: GraphQLInt },
      },
      resolve: async (source, args) => await getPhoneTypeResolver(args.id),
    },

    roleAppModulePermissions: {
      type: new GraphQLList(roleAppModulePermissionsType),
      resolve: async () => await roleAppModulePermissionsResolver(),
    },
    getRoleAppModulePermission: {
      type: roleAppModulePermissionsType,
      args: {
        id: { type: GraphQLInt },
      },
      resolve: async (source, args) =>
        await getRoleAppModulePermissionResolver(args.id),
    },

    roles: {
      type: new GraphQLList(rolesType),
      resolve: async () => await rolesResolver(),
    },
    getRole: {
      type: rolesType,
      args: {
        id: { type: GraphQLInt },
      },
      resolve: async (source, args) => await getRoleResolver(args.id),
    },

    socialNetworks: {
      type: new GraphQLList(socialNetworksType),
      resolve: async () => await socialNetworksResolver(),
    },
    getSocialNetwork: {
      type: socialNetworksType,
      args: {
        id: { type: GraphQLInt },
      },
      resolve: async (source, args) => await getSocialNetworkResolver(args.id),
    },

    userAddresses: {
      type: new GraphQLList(userAddressesType),
      resolve: async () => await userAddressesResolver(),
    },
    getUserAddress: {
      type: userAddressesType,
      args: {
        id: { type: GraphQLInt },
      },
      resolve: async (source, args) => await getUserAddressResolver(args.id),
    },

    userEmails: {
      type: new GraphQLList(userEmailsType),
      resolve: async () => await userEmailsResolver(),
    },
    getUserEmail: {
      type: userEmailsType,
      args: {
        id: { type: GraphQLInt },
      },
      resolve: async (source, args) => await getUserEmailResolver(args.id),
    },

    userPersonas: {
      type: new GraphQLList(userPersonasType),
      resolve: async () => await userPersonasResolver(),
    },
    getUserPersona: {
      type: userPersonasType,
      args: {
        id: { type: GraphQLInt },
      },
      resolve: async (source, args) => await getUserPersonaResolver(args.id),
    },

    userPhones: {
      type: new GraphQLList(userPhonesType),
      resolve: async () => await userPhonesResolver(),
    },
    getUserPhone: {
      type: userPhonesType,
      args: {
        id: { type: GraphQLInt },
      },
      resolve: async (source, args) => await getUserPhoneResolver(args.id),
    },

    userRoles: {
      type: new GraphQLList(userRolesType),
      resolve: async () => await userRolesResolver(),
    },
    getUserRole: {
      type: userRolesType,
      args: {
        id: { type: GraphQLInt },
      },
      resolve: async (source, args) => await getUserRoleResolver(args.id),
    },

    users: {
      type: new GraphQLList(usersType),
      resolve: async () => await usersResolver(),
    },
    getUser: {
      type: usersType,
      args: {
        id: { type: GraphQLInt },
      },
      resolve: async (source, args) => await getUserResolver(args.id),
    },

    userSocialNetworks: {
      type: new GraphQLList(userSocialNetworksType),
      resolve: async () => await userSocialNetworksResolver(),
    },
    getUserSocialNetwork: {
      type: userSocialNetworksType,
      args: {
        id: { type: GraphQLInt },
      },
      resolve: async (source, args) =>
        await getUserSocialNetworkResolver(args.id),
    },
  },
});

module.exports = queries;
