const { raw } = require('objection');

const ActivityLogs = require('../Models/ActivityLogs');

class ActivityLogsRepository {
  static async activityLogs(fields) {
    return await ActivityLogs.query().select(raw(fields));
  }

  static async getActivityLog(id, fields) {
    return await ActivityLogs.query().select(raw(fields)).findById(id);
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
