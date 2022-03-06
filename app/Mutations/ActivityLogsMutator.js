const { GraphQLObjectType, GraphQLString, GraphQLInt } = require('graphql');

class ActivityLogsMutator {
  static createActivityLogs() {
    return new GraphQLObjectType({
      name: 'createActivityLogs',
      fields: () => ({
        createActivityLogs: {
          type: GraphQLString,
          resolve: async (source, { input }, { mutators }) => {
            return mutators.createActivityLogs({ input });
          },
        },
      }),
    });
  }
}

module.exports = ActivityLogsMutator;
