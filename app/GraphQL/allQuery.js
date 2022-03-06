const { GraphQLObjectType, GraphQLList, GraphQLInt } = require('graphql');

const { activityLogsType } = require('./ActivityLogs/types');
const {
  getActivityLogsResolver,
  getActivityLogResolver,
} = require('./ActivityLogs/resolvers');

const { addressTypesType } = require('./AddressTypes/types');
const {
  getAddressTypesResolver,
  getAddressTypeResolver,
} = require('./AddressTypes/resolvers');

const { appModulesType } = require('./AppModules/types');
const {
  getAppModulesResolver,
  getAppModuleResolver,
} = require('./AppModules/resolvers');

const { devicesType } = require('./Devices/types');
const {
  getDevicesResolver,
  getDeviceResolver,
} = require('./Devices/resolvers');

const { emailTypesType } = require('./EmailTypes/types');
const {
  getEmailTypesResolvers,
  getEmailTypeResolvers,
} = require('./EmailTypes/resolvers');

const { personasType } = require('./Personas/types');
const {
  getPersonasResolver,
  getPersonaResolver,
} = require('./Personas/resolvers');

const { phoneTypesType } = require('./PhoneTypes/types');
const {
  getPhoneTypesResolver,
  getPhoneTypeResolver,
} = require('./PhoneTypes/resolvers');

const {
  roleAppModulePermissionsType,
} = require('./RoleAppModulePermissions/types');
const {
  getRoleAppModulePermissionsResolver,
  getRoleAppModulePermissionResolver,
} = require('./RoleAppModulePermissions/resolvers');

const { rolesType } = require('./Roles/types');
const { getRolesResolver, getRoleResolver } = require('./Roles/resolvers');

const { socialNetworksType } = require('./SocialNetworks/types');
const {
  getSocialNetworksResolver,
  getSocialNetworkResolver,
} = require('./SocialNetworks/resolvers');

const { userAddressesType } = require('./UserAddresses/types');
const {
  getUserAddressesResolvers,
  getUserAddressResolvers,
} = require('./UserAddresses/resolvers');

const { userEmailsType } = require('./UserEmails/types');
const {
  getUserEmailsResolver,
  getUserEmailResolver,
} = require('./UserEmails/resolvers');

const { userPersonasType } = require('./UserPersonas/types');
const {
  getUserPersonasResolver,
  getUserPersonaResolver,
} = require('./UserPersonas/resolvers');

const { userPhonesType } = require('./UserPhones/types');
const {
  getUserPhonesResolver,
  getUserPhoneResolver,
} = require('./UserPhones/resolvers');

const { userRolesType } = require('./UserRoles/types');
const {
  getUserRolesResolver,
  getUserRoleResolver,
} = require('./UserRoles/resolvers');

const { usersType } = require('./Users/types');
const { getUsersResolver, getUserResolver } = require('./Users/resolvers');

const { userSocialNetworksType } = require('./UserSocialNetwork/types');
const {
  getUserSocialNetworksResolver,
  getUserSocialNetworkResolver,
} = require('./UserSocialNetwork/resolvers');

const queries = new GraphQLObjectType({
  name: 'Query',
  fields: {
    activityLogs: {
      type: new GraphQLList(activityLogsType),
      resolve: async () => await getActivityLogsResolver(),
    },
    getActivityLog: {
      type: activityLogsType,
      args: {
        id: { type: GraphQLInt },
      },
      resolve: async (source, args) => await getActivityLogResolver(args.id),
    },

    addressTypes: {
      type: new GraphQLList(addressTypesType),
      resolve: async () => await getAddressTypesResolver(),
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
      resolve: async () => await getAppModulesResolver(),
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
      resolve: async () => await getDevicesResolver(),
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
      resolve: async () => await getEmailTypesResolvers(),
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
      resolve: async () => await getPersonasResolver(),
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
      resolve: async () => await getPhoneTypesResolver(),
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
      resolve: async () => await getRoleAppModulePermissionsResolver(),
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
      resolve: async () => await getRolesResolver(),
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
      resolve: async () => await getSocialNetworksResolver(),
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
      resolve: async () => await getUserAddressesResolvers(),
    },
    getUserAddress: {
      type: userAddressesType,
      args: {
        id: { type: GraphQLInt },
      },
      resolve: async (source, args) => await getUserAddressResolvers(args.id),
    },

    userEmails: {
      type: new GraphQLList(userEmailsType),
      resolve: async () => await getUserEmailsResolver(),
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
      resolve: async () => await getUserPersonasResolver(),
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
      resolve: async () => await getUserPhonesResolver(),
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
      resolve: async () => await getUserRolesResolver(),
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
      resolve: async () => await getUsersResolver(),
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
      resolve: async () => await getUserSocialNetworksResolver(),
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
