const { GraphQLList } = require('graphql');
const BigInt = require('graphql-bigint');

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
    id: { type: BigInt },
  },
  resolve: async (source, args, context, info) =>
    await getPriceSchemeDurationLogResolver(args.id, info),
};

module.exports = {
  priceSchemeDurationLogs,
  getPriceSchemeDurationLog,
};
