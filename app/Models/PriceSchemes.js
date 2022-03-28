const { Model } = require('objection');

class PriceSchemes extends Model {
  static get tableName() {
    return 'price_schemes';
  }
}

module.exports = PriceSchemes;
