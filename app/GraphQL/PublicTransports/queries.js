const { GraphQLList, GraphQLInt } = require('graphql');

const { publicTransportsType } = require('./types'),
  {
    publicTransportsResolver,
    getPublicTransportResolver,
  } = require('./resolvers');

const publicTransports = {
  type: new GraphQLList(publicTransportsType),
  resolve: async (source, args, context, info) =>
    await publicTransportsResolver(info),
};

const getPublicTransport = {
  type: publicTransportsType,
  args: {
    id: { type: GraphQLInt },
  },
  resolve: async (source, args, context, info) =>
    await getPublicTransportResolver(args.id, info),
};

module.exports = {
  publicTransports,
  getPublicTransport,
};
