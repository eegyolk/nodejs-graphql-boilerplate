const { GraphQLList } = require('graphql');
const BigInt = require('graphql-bigint');

const { propertyPublicTransportsType } = require('./types'),
  {
    propertyPublicTransportsResolver,
    getPropertyPublicTransportResolver,
  } = require('./resolvers');

const propertyPublicTransports = {
  type: new GraphQLList(propertyPublicTransportsType),
  resolve: async (source, args, context, info) =>
    await propertyPublicTransportsResolver(info),
};

const getPropertyPublicTransport = {
  type: propertyPublicTransportsType,
  args: {
    id: { type: BigInt },
  },
  resolve: async (source, args, context, info) =>
    await getPropertyPublicTransportResolver(args.id, info),
};

module.exports = {
  propertyPublicTransports,
  getPropertyPublicTransport,
};
