const { Model } = require('objection');

class SubscriptionConsumables extends Model {
  static get tableName() {
    return 'subscription_consumables';
  }
}

module.exports = SubscriptionConsumables;
