const { Model } = require('objection');

class PropertyHouseRules extends Model {
  static get tableName() {
    return 'property_house_rules';
  }
}

module.exports = PropertyHouseRules;
