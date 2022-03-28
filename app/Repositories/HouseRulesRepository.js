const { raw } = require('objection');

const HouseRules = require('../Models/HouseRules');

class HouseRulesRepository {
  static async houseRules(fields) {
    return await HouseRules.query().select(raw(fields));
  }

  static async getHouseRule(id, fields) {
    return await HouseRules.query().select(raw(fields)).findById(id);
  }

  static async getHouseRules(ids, fields) {
    return await HouseRules.query().select(raw(fields)).whereIn('id', ids);
  }

  static async createHouseRule(input) {
    const { code, label, description } = input;

    return await HouseRules.query().insert({
      code,
      label,
      description,
    });
  }
}

module.exports = HouseRulesRepository;
