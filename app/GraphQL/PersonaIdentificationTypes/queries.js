const { GraphQLList, GraphQLInt } = require('graphql');

const { personaIdentificationTypesType } = require('./types'),
  {
    personaIdentificationTypesResolver,
    getPersonaIdentificationTypeResolver,
  } = require('./resolvers');

const personaIdentificationTypes = {
  type: new GraphQLList(personaIdentificationTypesType),
  resolve: async (source, args, context, info) =>
    await personaIdentificationTypesResolver(info),
};

const getPersonaIdentificationType = {
  type: personaIdentificationTypesType,
  args: {
    id: { type: GraphQLInt },
  },
  resolve: async (source, args, context, info) =>
    await getPersonaIdentificationTypeResolver(args.id, info),
};

module.exports = {
  personaIdentificationTypes,
  getPersonaIdentificationType,
};
