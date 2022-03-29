const { GraphQLList, GraphQLInt } = require('graphql');

const { utilitiesType } = require('./types'),
  { utilitiesResolver, getUtilityResolver } = require('./resolvers');

const utilities = {
  type: new GraphQLList(utilitiesType),
  resolve: async (source, args, context, info) => await utilitiesResolver(info),
};

const getUtility = {
  type: utilitiesType,
  args: {
    id: { type: GraphQLInt },
  },
  resolve: async (source, args, context, info) =>
    await getUtilityResolver(args.id, info),
};

module.exports = {
  utilities,
  getUtility,
};
