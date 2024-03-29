const { GraphQLList } = require('graphql');
const BigInt = require('graphql-bigint');

const { propertyLeaseDurationsType } = require('./types'),
  {
    propertyLeaseDurationsResolver,
    getPropertyLeaseDurationResolver,
  } = require('./resolvers');

const propertyLeaseDurations = {
  type: new GraphQLList(propertyLeaseDurationsType),
  resolve: async (source, args, context, info) =>
    await propertyLeaseDurationsResolver(info),
};

const getPropertyLeaseDuration = {
  type: propertyLeaseDurationsType,
  args: {
    id: { type: BigInt },
  },
  resolve: async (source, args, context, info) =>
    await getPropertyLeaseDurationResolver(args.id, info),
};

module.exports = {
  propertyLeaseDurations,
  getPropertyLeaseDuration,
};
