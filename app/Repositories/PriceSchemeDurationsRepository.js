const { raw } = require('objection');

const PriceSchemeDurations = require('../Models/PriceSchemeDurations');

class PriceSchemeDurationsRepository {
  static async priceSchemeDurations(fields) {
    return await PriceSchemeDurations.query().select(raw(fields));
  }

  static async getPriceSchemeDuration(id, fields) {
    return await PriceSchemeDurations.query().select(raw(fields)).findById(id);
  }

  static async getPriceSchemeDurations(ids, fields) {
    return await PriceSchemeDurations.query()
      .select(raw(fields))
      .whereIn('id', ids);
  }

  static async createPriceSchemeDuration(input) {
    const { price_scheme_id, price_duration_id, amount, discount } = input;

    return await PriceSchemeDurations.query().insert({
      price_scheme_id,
      price_duration_id,
      amount,
      discount,
    });
  }
}

module.exports = PriceSchemeDurationsRepository;
