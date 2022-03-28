const { Model } = require('objection');

class PropertyUtilities extends Model {
  static get tableName() {
    return 'property_utilities';
  }
}

module.exports = PropertyUtilities;
