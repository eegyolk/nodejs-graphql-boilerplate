const ActivityLogs = require('../Models/ActivityLogs');

class ActivityLogsRepository {
  static async getActivityLogs() {
    return await ActivityLogs.query();
  }

  static async getActivityLog(id) {
    return await ActivityLogs.query().findById(id);
  }
}

module.exports = ActivityLogsRepository;
