const { raw } = require('objection');

const PriceSchemeFeatures = require('../Models/PriceSchemeFeatures');

class PriceSchemeFeaturesRepository {
  static async priceSchemeFeatures(fields) {
    return await PriceSchemeFeatures.query().select(raw(fields));
  }

  static async getPriceSchemeFeature(id, fields) {
    return await PriceSchemeFeatures.query().select(raw(fields)).findById(id);
  }

  static async getPriceSchemeFeatures(ids, fields) {
    return await PriceSchemeFeatures.query()
      .select(raw(fields))
      .whereIn('id', ids);
  }

  static async createPriceSchemeFeature(input) {
    const { price_scheme_id, name, str_value, int_value } = input;

    return await PriceSchemeFeatures.query().insert({
      price_scheme_id,
      name,
      str_value,
      int_value,
    });
  }
}

module.exports = PriceSchemeFeaturesRepository;
