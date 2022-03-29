const { raw } = require('objection');

const PropertyHouseRules = require('../Models/PropertyHouseRules');

class PropertyHouseRulesRepository {
  static async propertyHouseRules(fields) {
    return await PropertyHouseRules.query().select(raw(fields));
  }

  static async getPropertyHouseRule(id, fields) {
    return await PropertyHouseRules.query().select(raw(fields)).findById(id);
  }

  static async createPropertyHouseRule(input) {
    const { property_id, house_rule_id } = input;

    return await PropertyHouseRules.query().insert({
      property_id,
      house_rule_id,
    });
  }
}

module.exports = PropertyHouseRulesRepository;
