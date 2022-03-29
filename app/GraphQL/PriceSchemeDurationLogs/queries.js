const { GraphQLList, GraphQLInt } = require('graphql');

const { priceSchemeDurationLogsType } = require('./types'),
  {
    priceSchemeDurationLogsResolver,
    getPriceSchemeDurationLogResolver,
  } = require('./resolvers');

const priceSchemeDurationLogs = {
  type: new GraphQLList(priceSchemeDurationLogsType),
  resolve: async (source, args, context, info) =>
    await priceSchemeDurationLogsResolver(info),
};

const getPriceSchemeDurationLog = {
  type: priceSchemeDurationLogsType,
  args: {
    id: { type: GraphQLInt },
  },
  resolve: async (source, args, context, info) =>
    await getPriceSchemeDurationLogResolver(args.id, info),
};

module.exports = {
  priceSchemeDurationLogs,
  getPriceSchemeDurationLog,
};
