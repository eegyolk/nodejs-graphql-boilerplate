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

const { createSocialNetworkInputType } = require('./SocialNetworks/inputTypes'),
  { createSocialNetworkResolver } = require('./SocialNetworks/resolvers'),
  { socialNetworksType } = require('./SocialNetworks/types');

const mutations = new GraphQLObjectType({
  name: 'Mutation',
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

    createSocialNetwork: {
      type: socialNetworksType,
      args: {
        input: { type: createSocialNetworkInputType },
      },
      resolve: async (source, args) => await createSocialNetworkResolver(args),
    },
  },
});

module.exports = mutations;
