const { Model } = require('objection');

class PropertyAddresses extends Model {
  static get tableName() {
    return 'property_addresses';
  }
}

module.exports = PropertyAddresses;
