const { GraphQLList, GraphQLInt } = require('graphql');

const { identificationTypesType } = require('./types'),
  {
    identificationTypesResolver,
    getIdentificationTypeResolver,
  } = require('./resolvers');

const identificationTypes = {
  type: new GraphQLList(identificationTypesType),
  resolve: async (source, args, context, info) =>
    await identificationTypesResolver(info),
};

const getIdentificationType = {
  type: identificationTypesType,
  args: {
    id: { type: GraphQLInt },
  },
  resolve: async (source, args, context, info) =>
    await getIdentificationTypeResolver(args.id, info),
};

module.exports = {
  identificationTypes,
  getIdentificationType,
};
