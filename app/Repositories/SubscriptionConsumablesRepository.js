const { raw } = require('objection');

const SubscriptionConsumables = require('../Models/SubscriptionConsumables');

class SubscriptionConsumablesRepository {
  static async subscriptionConsumables(fields) {
    return await SubscriptionConsumables.query().select(raw(fields));
  }

  static async getSubscriptionConsumable(id, fields) {
    return await SubscriptionConsumables.query()
      .select(raw(fields))
      .findById(id);
  }

  static async createSubscriptionConsumable(input) {
    const {
      subscription_id,
      price_scheme_feature_name,
      price_scheme_feature_value,
      available_count,
      used_count,
    } = input;

    return await SubscriptionConsumables.query().insert({
      subscription_id,
      price_scheme_feature_name,
      price_scheme_feature_value,
      available_count,
      used_count,
    });
  }
}

module.exports = SubscriptionConsumablesRepository;
