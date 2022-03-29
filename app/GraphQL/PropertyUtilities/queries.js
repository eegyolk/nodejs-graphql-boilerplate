const { GraphQLList, GraphQLInt } = require('graphql');

const { propertyUtilitiesType } = require('./types'),
  {
    propertyUtilitiesResolver,
    getPropertyUtilityResolver,
  } = require('./resolvers');

const propertyUtilities = {
  type: new GraphQLList(propertyUtilitiesType),
  resolve: async (source, args, context, info) =>
    await propertyUtilitiesResolver(info),
};

const getPropertyUtility = {
  type: propertyUtilitiesType,
  args: {
    id: { type: GraphQLInt },
  },
  resolve: async (source, args, context, info) =>
    await getPropertyUtilityResolver(args.id, info),
};

module.exports = {
  propertyUtilities,
  getPropertyUtility,
};
