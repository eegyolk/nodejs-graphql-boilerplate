const ActivityLogsRepository = require('../../Repositories/ActivityLogsRepository');

const getActivityLogs = async () => {
  return await ActivityLogsRepository.getActivityLogs();
};

module.exports = {
  getActivityLogs,
};
