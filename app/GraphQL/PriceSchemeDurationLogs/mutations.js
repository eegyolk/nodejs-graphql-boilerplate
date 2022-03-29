const { createPriceSchemeDurationLogInputType } = require('./inputTypes'),
  { createPriceSchemeDurationLogResolver } = require('./resolvers'),
  { priceSchemeDurationLogsType } = require('./types');

const createPriceSchemeDurationLog = {
  type: priceSchemeDurationLogsType,
  args: {
    input: { type: createPriceSchemeDurationLogInputType },
  },
  resolve: async (source, args) =>
    await createPriceSchemeDurationLogResolver(args),
};

module.exports = {
  createPriceSchemeDurationLog,
};
