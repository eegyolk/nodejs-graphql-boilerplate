const { raw } = require('objection');

const SubscriptionPaymentDetails = require('../Models/SubscriptionPaymentDetails');

class SubscriptionPaymentDetailsRepository {
  static async subscriptionPaymentDetails(fields) {
    return await SubscriptionPaymentDetails.query().select(raw(fields));
  }

  static async getSubscriptionPaymentDetail(id, fields) {
    return await SubscriptionPaymentDetails.query()
      .select(raw(fields))
      .findById(id);
  }

  static async createSubscriptionPaymentDetail(input) {
    const { subscription_id, data, attachment_url } = input;

    return await SubscriptionPaymentDetails.query().insert({
      subscription_id,
      data,
      attachment_url,
    });
  }
}

module.exports = SubscriptionPaymentDetailsRepository;
