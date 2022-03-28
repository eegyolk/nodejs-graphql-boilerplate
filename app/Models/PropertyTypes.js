const { Model } = require('objection');

class PropertyTypes extends Model {
  static get tableName() {
    return 'property_types';
  }
}

module.exports = PropertyTypes;
