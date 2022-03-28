const { Model } = require('objection');

class HouseRules extends Model {
  static get tableName() {
    return 'house_rules';
  }
}

module.exports = HouseRules;
