const { GraphQLObjectType } = require('graphql');

const { createActivityLogInputType } = require('./ActivityLogs/inputTypes'),
  { createActivityLogResolver } = require('./ActivityLogs/resolvers'),
  { activityLogsType } = require('./ActivityLogs/types');

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
