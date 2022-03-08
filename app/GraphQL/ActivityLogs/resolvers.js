const graphqlFields = require('graphql-fields');

const ActivityLogsRepository = require('../../Repositories/ActivityLogsRepository');

const activityLogsResolver = async (info) => {
  const fields = Object.keys(
    graphqlFields(info, {}, { excludedFields: ['user', 'device'] })
  );

  return await ActivityLogsRepository.activityLogs(fields.join(','));
};

const getActivityLogResolver = async (id, info) => {
  const fields = Object.keys(
    graphqlFields(info, {}, { excludedFields: ['user', 'device'] })
  );

  return await ActivityLogsRepository.getActivityLog(id, fields.join(','));
};

const createActivityLogResolver = async (args) => {
  return await ActivityLogsRepository.createActivityLog(args.input);
};

module.exports = {
  activityLogsResolver,
  getActivityLogResolver,
  createActivityLogResolver,
};
