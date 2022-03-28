const { raw } = require('objection');

const PriceDurations = require('../Models/PriceDurations');

class PriceDurationsRepository {
  static async priceDurations(fields) {
    return await PriceDurations.query().select(raw(fields));
  }

  static async getPriceDuration(id, fields) {
    return await PriceDurations.query().select(raw(fields)).findById(id);
  }

  static async getPriceDurations(ids, fields) {
    return await PriceDurations.query().select(raw(fields)).whereIn('id', ids);
  }

  static async createPriceDuration(input) {
    const { code, label, description } = input;

    return await PriceDurations.query().insert({
      code,
      label,
      description,
    });
  }
}

module.exports = PriceDurationsRepository;
