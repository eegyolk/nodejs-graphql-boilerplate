const { GraphQLList, GraphQLString } = require('graphql');

const { activityLogsType } = require('./types'),
  { activityLogsResolver, getActivityLogResolver } = require('./resolvers');

const activityLogs = {
  type: new GraphQLList(activityLogsType),
  resolve: async (source, args, context, info) =>
    await activityLogsResolver(info),
};

const getActivityLog = {
  type: activityLogsType,
  args: {
    id: { type: GraphQLString },
  },
  resolve: async (source, args, context, info) =>
    await getActivityLogResolver(args.id, info),
};

module.exports = {
  activityLogs,
  getActivityLog,
};
