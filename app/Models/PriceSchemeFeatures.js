const { Model } = require('objection');

class PriceSchemeFeatures extends Model {
  static get tableName() {
    return 'price_scheme_features';
  }
}

module.exports = PriceSchemeFeatures;
