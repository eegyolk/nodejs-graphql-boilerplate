const graphqlFields = require('graphql-fields');
const {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLInt,
} = require('graphql');

const { devicesType } = require('../Devices/types');
const { usersType } = require('../Users/types');

const activityLogsType = new GraphQLObjectType({
  name: 'ActivityLogs',
  fields: {
    id: { type: new GraphQLNonNull(GraphQLString) },
    user_id: { type: new GraphQLNonNull(GraphQLInt) },
    user: {
      type: new GraphQLNonNull(usersType),
      resolve: (source, args, { loaders }, info) => {
        const fields = Object.keys(graphqlFields(info));

        return loaders.users.load(`${source.user_id}@${fields.join(',')}`);
      },
    },
    device_id: { type: new GraphQLNonNull(GraphQLInt) },
    device: {
      type: new GraphQLNonNull(devicesType),
      resolve: (source, args, { loaders }, info) => {
        const fields = Object.keys(
          graphqlFields(info, {}, { excludedFields: ['user'] })
        );

        return loaders.devices.load(`${source.device_id}@${fields.join(',')}`);
      },
    },
    activity: { type: new GraphQLNonNull(GraphQLString) },
    ip_address: { type: new GraphQLNonNull(GraphQLString) },
    timestamp: { type: new GraphQLNonNull(GraphQLString) },
  },
});

module.exports = { activityLogsType };
