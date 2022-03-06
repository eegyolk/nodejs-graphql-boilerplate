const {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLInt,
} = require('graphql');

const activityLogsType = new GraphQLObjectType({
  name: 'ActivityLogs',
  fields: {
    id: { type: new GraphQLNonNull(GraphQLString) },
    user_id: { type: new GraphQLNonNull(GraphQLInt) },
    device_id: { type: new GraphQLNonNull(GraphQLInt) },
    activity: { type: new GraphQLNonNull(GraphQLString) },
    ip_address: { type: new GraphQLNonNull(GraphQLString) },
    timestamp: { type: new GraphQLNonNull(GraphQLString) },
  },
});

module.exports = activityLogsType;
