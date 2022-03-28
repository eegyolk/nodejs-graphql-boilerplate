const { Model } = require('objection');

class PropertyVerifications extends Model {
  static get tableName() {
    return 'property_verifications';
  }
}

module.exports = PropertyVerifications;
