const ActivityLogsRepository = require('../../Repositories/ActivityLogsRepository');

const getActivityLogsResolver = async () => {
  return await ActivityLogsRepository.getActivityLogs();
};

const getActivityLogResolver = async (id) => {
  return await ActivityLogsRepository.getActivityLog(id);
};

module.exports = {
  getActivityLogsResolver,
  getActivityLogResolver,
};
