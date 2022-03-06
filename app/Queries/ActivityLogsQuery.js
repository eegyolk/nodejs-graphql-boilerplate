const { GraphQLObjectType, GraphQLString, GraphQLInt } = require('graphql');

class ActivityLogsQuery {
  static query() {
    return new GraphQLObjectType({
      name: 'ActivityLogs',
      fields: {
        id: { type: GraphQLString },
        user_id: { type: GraphQLInt },
        device_id: { type: GraphQLInt },
        activity: { type: GraphQLString },
        ip_address: { type: GraphQLString },
        timestamp: { type: GraphQLString },
      },
    });
  }
}

module.exports = ActivityLogsQuery;
