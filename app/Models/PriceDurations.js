const { Model } = require('objection');

class PriceDurations extends Model {
  static get tableName() {
    return 'price_durations';
  }
}

module.exports = PriceDurations;
