const { GraphQLError } = require('graphql');

const ActivityLogsRepository = require('../../Repositories/ActivityLogsRepository');

const getActivityLogsResolver = async () => {
  const result = await ActivityLogsRepository.getActivityLogs();

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

module.exports = {
  getActivityLogsResolver,
  getActivityLogResolver,
};
