const { GraphQLList } = require('graphql');
const BigInt = require('graphql-bigint');

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
    id: { type: BigInt },
  },
  resolve: async (source, args, context, info) =>
    await getPersonaIdentificationTypeResolver(args.id, info),
};

module.exports = {
  personaIdentificationTypes,
  getPersonaIdentificationType,
};
