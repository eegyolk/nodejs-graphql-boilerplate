const { GraphQLList } = require('graphql');
const BigInt = require('graphql-bigint');

const { devicesType } = require('./types'),
  { devicesResolver, getDeviceResolver } = require('./resolvers');

const devices = {
  type: new GraphQLList(devicesType),
  resolve: async (source, args, context, info) => await devicesResolver(info),
};

const getDevice = {
  type: devicesType,
  args: {
    id: { type: BigInt },
  },
  resolve: async (source, args, context, info) =>
    await getDeviceResolver(args.id, info),
};

module.exports = {
  devices,
  getDevice,
};
