const {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLInt,
} = require('graphql');

const { devicesType } = require('../Devices/types'),
  { getDeviceResolver } = require('../Devices/resolvers');

const { usersType } = require('../Users/types'),
  { getUserResolver } = require('../Users/resolvers');

const activityLogsType = new GraphQLObjectType({
  name: 'ActivityLogs',
  fields: {
    id: { type: new GraphQLNonNull(GraphQLString) },
    user_id: { type: new GraphQLNonNull(GraphQLInt) },
    user: {
      type: new GraphQLNonNull(usersType),
      resolve: (source, args, { loaders }) =>
        loaders.users.load(source.user_id),
    },
    device_id: { type: new GraphQLNonNull(GraphQLInt) },
    device: {
      type: new GraphQLNonNull(devicesType),
      resolve: (source, args, { loaders }) =>
        loaders.devices.load(source.device_id),
    },
    activity: { type: new GraphQLNonNull(GraphQLString) },
    ip_address: { type: new GraphQLNonNull(GraphQLString) },
    timestamp: { type: new GraphQLNonNull(GraphQLString) },
  },
});

module.exports = { activityLogsType };
