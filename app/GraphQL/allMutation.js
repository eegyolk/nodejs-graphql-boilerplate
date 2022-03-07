const { GraphQLObjectType, GraphQLList, GraphQLInt } = require('graphql');

const { createPersonaInputType } = require('./Personas/inputTypes');
const { createPersonaResolver } = require('./Personas/resolvers');
const { personasType } = require('./Personas/types');

const mutations = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    createPersona: {
      type: personasType,
      args: {
        input: { type: createPersonaInputType },
      },
      resolve: async (source, args) => await createPersonaResolver(args),
    },
  },
});

module.exports = mutations;
