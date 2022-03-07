const ActivityLogsRepository = require('../../Repositories/ActivityLogsRepository');

const activityLogsResolver = async () => {
  return await ActivityLogsRepository.activityLogs();
};

const getActivityLogResolver = async (id) => {
  return await ActivityLogsRepository.getActivityLog(id);
};

const createActivityLogResolver = async (args) => {
  return await ActivityLogsRepository.createActivityLog(args.input);
};

module.exports = {
  activityLogsResolver,
  getActivityLogResolver,
  createActivityLogResolver,
};
