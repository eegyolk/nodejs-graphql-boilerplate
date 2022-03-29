const { GraphQLList, GraphQLInt } = require('graphql');

const { personasType } = require('./types'),
  { personasResolver, getPersonaResolver } = require('./resolvers');

const personas = {
  type: new GraphQLList(personasType),
  resolve: async (source, args, context, info) => await personasResolver(info),
};

const getPersona = {
  type: personasType,
  args: {
    id: { type: GraphQLInt },
  },
  resolve: async (source, args, context, info) =>
    await getPersonaResolver(args.id, info),
};

module.exports = {
  personas,
  getPersona,
};
