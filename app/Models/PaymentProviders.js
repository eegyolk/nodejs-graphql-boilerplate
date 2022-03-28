const { Model } = require('objection');

class PaymentProviders extends Model {
  static get tableName() {
    return 'payment_providers';
  }
}

module.exports = PaymentProviders;
