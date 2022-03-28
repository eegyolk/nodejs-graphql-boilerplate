const { Model } = require('objection');

class Subscriptions extends Model {
  static get tableName() {
    return 'subscriptions';
  }
}

module.exports = Subscriptions;
