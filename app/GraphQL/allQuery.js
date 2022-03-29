const {
  GraphQLObjectType,
  GraphQLList,
  GraphQLInt,
  GraphQLString,
} = require('graphql');
const { getAmenity } = require('../Repositories/AmenitiesRepository');

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

const { amenitiesType } = require('./Amenities/types'),
  { amenitiesResolver, getAmenityResolver } = require('./Amenities/resolvers');

const { appModulesType } = require('./AppModules/types'),
  {
    appModulesResolver,
    getAppModuleResolver,
  } = require('./AppModules/resolvers');

const { devicesType } = require('./Devices/types'),
  { devicesResolver, getDeviceResolver } = require('./Devices/resolvers');

const { emailTypesType } = require('./EmailTypes/types'),
  {
    emailTypesResolver,
    getEmailTypeResolver,
  } = require('./EmailTypes/resolvers');

const { featuresType } = require('./Features/types'),
  { featuresResolver, getFeatureResolver } = require('./Features/resolvers');

const { houseRulesType } = require('./HouseRules/types'),
  {
    houseRulesResolver,
    getHouseRuleResolver,
  } = require('./HouseRules/resolvers');

const { identificationTypesType } = require('./IdentificationTypes/types'),
  {
    identificationTypesResolver,
    getIdentificationTypeResolver,
  } = require('./IdentificationTypes/resolvers');

const {
    personaIdentificationTypesType,
  } = require('./PersonaIdentificationTypes/types'),
  {
    personaIdentificationTypesResolver,
    getPersonaIdentificationTypeResolver,
  } = require('./PersonaIdentificationTypes/resolvers');

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

const { userIdentificationsType } = require('./UserIdentifications/types'),
  {
    userIdentificationsResolver,
    getUserIdentificationResolver,
  } = require('./UserIdentifications/resolvers');

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

const { userSocialNetworksType } = require('./UserSocialNetworks/types'),
  {
    userSocialNetworksResolver,
    getUserSocialNetworkResolver,
  } = require('./UserSocialNetworks/resolvers');

const queries = new GraphQLObjectType({
  name: 'Queries',
  fields: {
    activityLogs: {
      type: new GraphQLList(activityLogsType),
      resolve: async (source, args, context, info) =>
        await activityLogsResolver(info),
    },
    getActivityLog: {
      type: activityLogsType,
      args: {
        id: { type: GraphQLString },
      },
      resolve: async (source, args, context, info) =>
        await getActivityLogResolver(args.id, info),
    },

    addressTypes: {
      type: new GraphQLList(addressTypesType),
      resolve: async (source, args, context, info) =>
        await addressTypesResolver(info),
    },
    getAddressType: {
      type: addressTypesType,
      args: {
        id: { type: GraphQLInt },
      },
      resolve: async (source, args, context, info) =>
        await getAddressTypeResolver(args.id, info),
    },

    amenities: {
      type: new GraphQLList(amenitiesType),
      resolve: async (source, args, context, info) =>
        await amenitiesResolver(info),
    },
    getAmenity: {
      type: amenitiesType,
      args: {
        id: { type: GraphQLInt },
      },
      resolve: async (source, args, context, info) =>
        await getAmenityResolver(args.id, info),
    },

    appModules: {
      type: new GraphQLList(appModulesType),
      resolve: async (source, args, context, info) =>
        await appModulesResolver(info),
    },
    getAppModule: {
      type: appModulesType,
      args: {
        id: { type: GraphQLInt },
      },
      resolve: async (source, args, context, info) =>
        await getAppModuleResolver(args.id, info),
    },

    devices: {
      type: new GraphQLList(devicesType),
      resolve: async (source, args, context, info) =>
        await devicesResolver(info),
    },
    getDevice: {
      type: devicesType,
      args: {
        id: { type: GraphQLInt },
      },
      resolve: async (source, args, context, info) =>
        await getDeviceResolver(args.id, info),
    },

    emailTypes: {
      type: new GraphQLList(emailTypesType),
      resolve: async (source, args, context, info) =>
        await emailTypesResolver(info),
    },
    getEmailType: {
      type: emailTypesType,
      args: {
        id: { type: GraphQLInt },
      },
      resolve: async (source, args, context, info) =>
        await getEmailTypeResolver(args.id, info),
    },

    features: {
      type: new GraphQLList(featuresType),
      resolve: async (source, args, context, info) =>
        await featuresResolver(info),
    },
    getFeature: {
      type: featuresType,
      args: {
        id: { type: GraphQLInt },
      },
      resolve: async (source, args, context, info) =>
        await getFeatureResolver(args.id, info),
    },

    houseRules: {
      type: new GraphQLList(houseRulesType),
      resolve: async (source, args, context, info) =>
        await houseRulesResolver(info),
    },
    getHouseRule: {
      type: houseRulesType,
      args: {
        id: { type: GraphQLInt },
      },
      resolve: async (source, args, context, info) =>
        await getHouseRuleResolver(args.id, info),
    },

    identificationTypes: {
      type: new GraphQLList(identificationTypesType),
      resolve: async (source, args, context, info) =>
        await identificationTypesResolver(info),
    },
    getIdentificationType: {
      type: identificationTypesType,
      args: {
        id: { type: GraphQLInt },
      },
      resolve: async (source, args, context, info) =>
        await getIdentificationTypeResolver(args.id, info),
    },

    personaIdentificationTypes: {
      type: new GraphQLList(personaIdentificationTypesType),
      resolve: async (source, args, context, info) =>
        await personaIdentificationTypesResolver(info),
    },
    getPersonaIdentificationType: {
      type: personaIdentificationTypesType,
      args: {
        id: { type: GraphQLInt },
      },
      resolve: async (source, args, context, info) =>
        await getPersonaIdentificationTypeResolver(args.id, info),
    },

    personas: {
      type: new GraphQLList(personasType),
      resolve: async (source, args, context, info) =>
        await personasResolver(info),
    },
    getPersona: {
      type: personasType,
      args: {
        id: { type: GraphQLInt },
      },
      resolve: async (source, args, context, info) =>
        await getPersonaResolver(args.id, info),
    },

    phoneTypes: {
      type: new GraphQLList(phoneTypesType),
      resolve: async (source, args, context, info) =>
        await phoneTypesResolver(info),
    },
    getPhoneType: {
      type: phoneTypesType,
      args: {
        id: { type: GraphQLInt },
      },
      resolve: async (source, args, context, info) =>
        await getPhoneTypeResolver(args.id, info),
    },

    roleAppModulePermissions: {
      type: new GraphQLList(roleAppModulePermissionsType),
      resolve: async (source, args, context, info) =>
        await roleAppModulePermissionsResolver(info),
    },
    getRoleAppModulePermission: {
      type: roleAppModulePermissionsType,
      args: {
        id: { type: GraphQLInt },
      },
      resolve: async (source, args, context, info) =>
        await getRoleAppModulePermissionResolver(args.id, info),
    },

    roles: {
      type: new GraphQLList(rolesType),
      resolve: async (source, args, context, info) => await rolesResolver(info),
    },
    getRole: {
      type: rolesType,
      args: {
        id: { type: GraphQLInt },
      },
      resolve: async (source, args, context, info) =>
        await getRoleResolver(args.id, info),
    },

    socialNetworks: {
      type: new GraphQLList(socialNetworksType),
      resolve: async (source, args, context, info) =>
        await socialNetworksResolver(info),
    },
    getSocialNetwork: {
      type: socialNetworksType,
      args: {
        id: { type: GraphQLInt },
      },
      resolve: async (source, args, context, info) =>
        await getSocialNetworkResolver(args.id, info),
    },

    userAddresses: {
      type: new GraphQLList(userAddressesType),
      resolve: async (source, args, context, info) =>
        await userAddressesResolver(info),
    },
    getUserAddress: {
      type: userAddressesType,
      args: {
        id: { type: GraphQLInt },
      },
      resolve: async (source, args, context, info) =>
        await getUserAddressResolver(args.id, info),
    },

    userEmails: {
      type: new GraphQLList(userEmailsType),
      resolve: async (source, args, context, info) =>
        await userEmailsResolver(info),
    },
    getUserEmail: {
      type: userEmailsType,
      args: {
        id: { type: GraphQLInt },
      },
      resolve: async (source, args, context, info) =>
        await getUserEmailResolver(args.id, info),
    },

    userIdentifications: {
      type: new GraphQLList(userIdentificationsType),
      resolve: async (source, args, context, info) =>
        await userIdentificationsResolver(info),
    },
    getUserIdentification: {
      type: userIdentificationsType,
      args: {
        id: { type: GraphQLInt },
      },
      resolve: async (source, args, context, info) =>
        await getUserIdentificationResolver(args.id, info),
    },

    userPersonas: {
      type: new GraphQLList(userPersonasType),
      resolve: async (source, args, context, info) =>
        await userPersonasResolver(info),
    },
    getUserPersona: {
      type: userPersonasType,
      args: {
        id: { type: GraphQLInt },
      },
      resolve: async (source, args, context, info) =>
        await getUserPersonaResolver(args.id, info),
    },

    userPhones: {
      type: new GraphQLList(userPhonesType),
      resolve: async (source, args, context, info) =>
        await userPhonesResolver(info),
    },
    getUserPhone: {
      type: userPhonesType,
      args: {
        id: { type: GraphQLInt },
      },
      resolve: async (source, args, context, info) =>
        await getUserPhoneResolver(args.id, info),
    },

    userRoles: {
      type: new GraphQLList(userRolesType),
      resolve: async (source, args, context, info) =>
        await userRolesResolver(info),
    },
    getUserRole: {
      type: userRolesType,
      args: {
        id: { type: GraphQLInt },
      },
      resolve: async (source, args, context, info) =>
        await getUserRoleResolver(args.id, info),
    },

    users: {
      type: new GraphQLList(usersType),
      resolve: async (source, args, context, info) => await usersResolver(info),
    },
    getUser: {
      type: usersType,
      args: {
        id: { type: GraphQLInt },
      },
      resolve: async (source, args, context, info) =>
        await getUserResolver(args.id, info),
    },

    userSocialNetworks: {
      type: new GraphQLList(userSocialNetworksType),
      resolve: async (source, args, context, info) =>
        await userSocialNetworksResolver(info),
    },
    getUserSocialNetwork: {
      type: userSocialNetworksType,
      args: {
        id: { type: GraphQLInt },
      },
      resolve: async (source, args, context, info) =>
        await getUserSocialNetworkResolver(args.id, info),
    },
  },
});

module.exports = queries;
