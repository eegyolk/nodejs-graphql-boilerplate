const ActivityLogs = require('../Models/ActivityLogs');

class ActivityLogsRepository {
  static async getActivityLogs() {
    return await ActivityLogs.query();
  }

  static async getActivityLog(id) {
    return await ActivityLogs.query().findById(id);
  }

  static async createActivityLog(input) {
    const { user_id, device_id, activity, ip_address } = input;

    return await ActivityLogs.query().insert({
      user_id,
      device_id,
      activity,
      ip_address,
    });
  }
}

module.exports = ActivityLogsRepository;
