const { GraphQLError } = require('graphql');

const ActivityLogsRepository = require('../../Repositories/ActivityLogsRepository');

const activityLogsResolver = async () => {
  const result = await ActivityLogsRepository.activityLogs();

  if (result.length > 0) {
    return result;
  }

  return new GraphQLError('No data found', {});
};

const getActivityLogResolver = async (id) => {
  const result = await ActivityLogsRepository.getActivityLog(id);

  if (result) {
    return result;
  }

  return new GraphQLError(`No data found for id ${id}`, {});
};

const createActivityLogResolver = async (args) => {
  return await ActivityLogsRepository.createActivityLog(args.input);
};

module.exports = {
  activityLogsResolver,
  getActivityLogResolver,
  createActivityLogResolver,
};
