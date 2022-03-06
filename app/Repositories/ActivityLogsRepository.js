const ActivityLogs = require('../Models/ActivityLogs');

class ActivityLogsRepository {
  static async getActivityLogs() {
    return await ActivityLogs.query();
  }
}

module.exports = ActivityLogsRepository;
