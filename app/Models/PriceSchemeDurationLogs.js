const { Model } = require('objection');

class PriceSchemeDurationLogs extends Model {
  static get tableName() {
    return 'price_scheme_duration_logs';
  }
}

module.exports = PriceSchemeDurationLogs;
