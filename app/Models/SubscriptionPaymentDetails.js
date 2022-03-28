const { Model } = require('objection');

class SubscriptionPaymentDetails extends Model {
  static get tableName() {
    return 'subscription_payment_details';
  }
}

module.exports = SubscriptionPaymentDetails;
