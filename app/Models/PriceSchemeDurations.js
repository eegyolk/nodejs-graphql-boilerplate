const { Model } = require('objection');

class PriceSchemeDurations extends Model {
  static get tableName() {
    return 'price_scheme_durations';
  }
}

module.exports = PriceSchemeDurations;
