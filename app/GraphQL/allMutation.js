const { GraphQLObjectType } = require('graphql');

const { createActivityLogInputType } = require('./ActivityLogs/inputTypes'),
  { createActivityLogResolver } = require('./ActivityLogs/resolvers'),
  { activityLogsType } = require('./ActivityLogs/types');

const { createAddressTypeInputType } = require('./AddressTypes/inputTypes'),
  { createAddressTypeResolver } = require('./AddressTypes/resolvers'),
  { addressTypesType } = require('./AddressTypes/types');

const { createAppModuleInputType } = require('./AppModules/inputTypes'),
  { createAppModuleResolver } = require('./AppModules/resolvers'),
  { appModulesType } = require('./AppModules/types');

const { createDeviceInputType } = require('./Devices/inputTypes'),
  { createDeviceResolver } = require('./Devices/resolvers'),
  { devicesType } = require('./Devices/types');

const { createEmailTypeInputType } = require('./EmailTypes/inputTypes'),
  { createEmailTypeResolver } = require('./EmailTypes/resolvers'),
  { emailTypesType } = require('./EmailTypes/types');

const { createPersonaInputType } = require('./Personas/inputTypes'),
  { createPersonaResolver } = require('./Personas/resolvers'),
  { personasType } = require('./Personas/types');

const { createPhoneTypeInputType } = require('./PhoneTypes/inputTypes'),
  { createPhoneTypeResolver } = require('./PhoneTypes/resolvers'),
  { phoneTypesType } = require('./PhoneTypes/types');

const {
    createRoleAppModulePermissionInputType,
  } = require('./RoleAppModulePermissions/inputTypes'),
  {
    createRoleAppModulePermissionResolver,
  } = require('./RoleAppModulePermissions/resolvers'),
  {
    roleAppModulePermissionsType,
  } = require('./RoleAppModulePermissions/types');

const { createRoleInputType } = require('./Roles/inputTypes'),
  { createRoleResolver } = require('./Roles/resolvers'),
  { rolesType } = require('./Roles/types');

const { createSocialNetworkInputType } = require('./SocialNetworks/inputTypes'),
  { createSocialNetworkResolver } = require('./SocialNetworks/resolvers'),
  { socialNetworksType } = require('./SocialNetworks/types');

const { createUserAddressInputType } = require('./UserAddresses/inputTypes'),
  { createUserAddressResolver } = require('./UserAddresses/resolvers'),
  { userAddressesType } = require('./UserAddresses/types');

const { createUserEmailInputType } = require('./UserEmails/inputTypes'),
  { createUserEmailResolver } = require('./UserEmails/resolvers'),
  { userEmailsType } = require('./UserEmails/types');

const { createUserPersonaInputType } = require('./UserPersonas/inputTypes'),
  { createUserPersonaResolver } = require('./UserPersonas/resolvers'),
  { userPersonasType } = require('./UserPersonas/types');

const { createUserPhoneInputType } = require('./UserPhones/inputTypes'),
  { createUserPhoneResolver } = require('./UserPhones/resolvers'),
  { userPhonesType } = require('./UserPhones/types');

const { createUserRoleInputType } = require('./UserRoles/inputTypes'),
  { createUserRoleResolver } = require('./UserRoles/resolvers'),
  { userRolesType } = require('./UserRoles/types');

const mutations = new GraphQLObjectType({
  name: 'Mutations',
  fields: {
    createActivityLog: {
      type: activityLogsType,
      args: {
        input: { type: createActivityLogInputType },
      },
      resolve: async (source, args) => await createActivityLogResolver(args),
    },

    createAddressType: {
      type: addressTypesType,
      args: {
        input: { type: createAddressTypeInputType },
      },
      resolve: async (source, args) => await createAddressTypeResolver(args),
    },

    createAppModule: {
      type: appModulesType,
      args: {
        input: { type: createAppModuleInputType },
      },
      resolve: async (source, args) => await createAppModuleResolver(args),
    },

    createDevice: {
      type: devicesType,
      args: {
        input: { type: createDeviceInputType },
      },
      resolve: async (source, args) => await createDeviceResolver(args),
    },

    createEmailType: {
      type: emailTypesType,
      args: {
        input: { type: createEmailTypeInputType },
      },
      resolve: async (source, args) => await createEmailTypeResolver(args),
    },

    createPersona: {
      type: personasType,
      args: {
        input: { type: createPersonaInputType },
      },
      resolve: async (source, args) => await createPersonaResolver(args),
    },

    createPhoneType: {
      type: phoneTypesType,
      args: {
        input: { type: createPhoneTypeInputType },
      },
      resolve: async (source, args) => await createPhoneTypeResolver(args),
    },

    createRoleAppModulePermission: {
      type: roleAppModulePermissionsType,
      args: {
        input: { type: createRoleAppModulePermissionInputType },
      },
      resolve: async (source, args) =>
        await createRoleAppModulePermissionResolver(args),
    },

    createRole: {
      type: rolesType,
      args: {
        input: { type: createRoleInputType },
      },
      resolve: async (source, args) => await createRoleResolver(args),
    },

    createSocialNetwork: {
      type: socialNetworksType,
      args: {
        input: { type: createSocialNetworkInputType },
      },
      resolve: async (source, args) => await createSocialNetworkResolver(args),
    },

    createUserAddress: {
      type: userAddressesType,
      args: {
        input: { type: createUserAddressInputType },
      },
      resolve: async (source, args) => await createUserAddressResolver(args),
    },

    createUserEmail: {
      type: userEmailsType,
      args: {
        input: { type: createUserEmailInputType },
      },
      resolve: async (source, args) => await createUserEmailResolver(args),
    },

    createUserPersona: {
      type: userPersonasType,
      args: {
        input: { type: createUserPersonaInputType },
      },
      resolve: async (source, args) => await createUserPersonaResolver(args),
    },

    createUserPhone: {
      type: userPhonesType,
      args: {
        input: { type: createUserPhoneInputType },
      },
      resolve: async (source, args) => await createUserPhoneResolver(args),
    },

    createUserRole: {
      type: userRolesType,
      args: {
        input: { type: createUserRoleInputType },
      },
      resolve: async (source, args) => await createUserRoleResolver(args),
    },
  },
});

module.exports = mutations;
