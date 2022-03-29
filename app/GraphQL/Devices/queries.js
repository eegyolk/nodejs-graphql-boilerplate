const { GraphQLList, GraphQLInt } = require('graphql');

const { devicesType } = require('./types'),
  { devicesResolver, getDeviceResolver } = require('./resolvers');

const devices = {
  type: new GraphQLList(devicesType),
  resolve: async (source, args, context, info) => await devicesResolver(info),
};

const getDevice = {
  type: devicesType,
  args: {
    id: { type: GraphQLInt },
  },
  resolve: async (source, args, context, info) =>
    await getDeviceResolver(args.id, info),
};

module.exports = {
  devices,
  getDevice,
};
