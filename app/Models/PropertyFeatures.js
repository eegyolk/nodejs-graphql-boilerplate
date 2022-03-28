const { Model } = require('objection');

class PropertyFeatures extends Model {
  static get tableName() {
    return 'property_features';
  }
}

module.exports = PropertyFeatures;
