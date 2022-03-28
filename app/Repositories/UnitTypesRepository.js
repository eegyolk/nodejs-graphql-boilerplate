const { raw } = require('objection');

const UnitTypes = require('../Models/UnitTypes');

class UnitTypesRepository {
  static async unitTypes(fields) {
    return await UnitTypes.query().select(raw(fields));
  }

  static async getUnitType(id, fields) {
    return await UnitTypes.query().select(raw(fields)).findById(id);
  }

  static async getUnitTypes(ids, fields) {
    return await UnitTypes.query().select(raw(fields)).whereIn('id', ids);
  }

  static async createUnitType(input) {
    const { code, label, description } = input;

    return await UnitTypes.query().insert({
      code,
      label,
      description,
    });
  }
}

module.exports = UnitTypesRepository;
