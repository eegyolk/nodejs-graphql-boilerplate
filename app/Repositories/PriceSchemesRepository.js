const { raw } = require('objection');

const PriceSchemes = require('../Models/PriceSchemes');

class PriceSchemesRepository {
  static async priceSchemes(fields) {
    return await PriceSchemes.query().select(raw(fields));
  }

  static async getPriceScheme(id, fields) {
    return await PriceSchemes.query().select(raw(fields)).findById(id);
  }

  static async getPriceSchemes(ids, fields) {
    return await PriceSchemes.query().select(raw(fields)).whereIn('id', ids);
  }

  static async createPriceScheme(input) {
    const { code, label, description } = input;

    return await PriceSchemes.query().insert({
      code,
      label,
      description,
    });
  }
}

module.exports = PriceSchemesRepository;
