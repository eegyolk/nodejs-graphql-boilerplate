const { raw } = require('objection');

const Subscriptions = require('../Models/Subscriptions');

class SubscriptionsRepository {
  static async subscriptions(fields) {
    return await Subscriptions.query().select(raw(fields));
  }

  static async getSubscription(id, fields) {
    return await Subscriptions.query().select(raw(fields)).findById(id);
  }

  static async getSubscriptions(ids, fields) {
    return await Subscriptions.query().select(raw(fields)).whereIn('id', ids);
  }

  static async createSubscription(input) {
    const {
      user_id,
      price_scheme_duration_id,
      price_scheme_duration_amount,
      price_scheme_duration_discount,
      price_scheme_feature_id,
      price_scheme_feature_inclusion,
      total_amount,
      payment_provider_id,
      payment_reference_no,
      payment_status,
      payment_notes,
      starts_at,
      ends_at,
    } = input;

    return await Subscriptions.query().insert({
      user_id,
      price_scheme_duration_id,
      price_scheme_duration_amount,
      price_scheme_duration_discount,
      price_scheme_feature_id,
      price_scheme_feature_inclusion,
      total_amount,
      payment_provider_id,
      payment_reference_no,
      payment_status,
      payment_notes,
      starts_at,
      ends_at,
    });
  }
}

module.exports = SubscriptionsRepository;
