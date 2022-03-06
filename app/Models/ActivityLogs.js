const { Model } = require('objection');

class ActivityLogs extends Model {
  static get tableName() {
    return 'activity_logs';
  }

  static get relationMappings() {}
}

module.exports = ActivityLogs;
