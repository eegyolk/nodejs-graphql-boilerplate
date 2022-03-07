const { Model } = require('objection');
const { v4: uuidv4 } = require('uuid');

class ActivityLogs extends Model {
  static get tableName() {
    return 'activity_logs';
  }

  async $beforeInsert(queryContext) {
    const parent = super.$beforeInsert(queryContext);

    return Promise.resolve(parent).then(() => {
      this.id = uuidv4();
    });
  }

  static get relationMappings() {}
}

module.exports = ActivityLogs;
