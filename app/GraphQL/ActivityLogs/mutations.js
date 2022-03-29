const { createActivityLogInputType } = require('./inputTypes'),
  { createActivityLogResolver } = require('./resolvers'),
  { activityLogsType } = require('./types');

const createActivityLog = {
  type: activityLogsType,
  args: {
    input: { type: createActivityLogInputType },
  },
  resolve: async (source, args) => await createActivityLogResolver(args),
};

module.exports = {
  createActivityLog,
};
