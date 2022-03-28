const { Model } = require('objection');

class LeaseDurations extends Model {
  static get tableName() {
    return 'lease_durations';
  }
}

module.exports = LeaseDurations;
