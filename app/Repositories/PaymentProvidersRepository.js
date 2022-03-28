const { raw } = require('objection');

const PaymentProviders = require('../Models/PaymentProviders');

class PaymentProvidersRepository {
  static async paymentProviders(fields) {
    return await PaymentProviders.query().select(raw(fields));
  }

  static async getPaymentProvider(id, fields) {
    return await PaymentProviders.query().select(raw(fields)).findById(id);
  }

  static async getPaymentProviders(ids, fields) {
    return await PaymentProviders.query()
      .select(raw(fields))
      .whereIn('id', ids);
  }

  static async createPaymentProvider(input) {
    const {
      code,
      label,
      description,
      account_name,
      account_number,
      swift_code,
    } = input;

    return await PaymentProviders.query().insert({
      code,
      label,
      description,
      account_name,
      account_number,
      swift_code,
    });
  }
}

module.exports = PaymentProvidersRepository;
