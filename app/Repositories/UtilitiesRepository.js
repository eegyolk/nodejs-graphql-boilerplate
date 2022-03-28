const { raw } = require('objection');

const Utilities = require('../Models/Utilities');

class UtilitiesRepository {
  static async utilities(fields) {
    return await Utilities.query().select(raw(fields));
  }

  static async getUtility(id, fields) {
    return await Utilities.query().select(raw(fields)).findById(id);
  }

  static async getUtilities(ids, fields) {
    return await Utilities.query().select(raw(fields)).whereIn('id', ids);
  }

  static async createUtility(input) {
    const { code, label, description } = input;

    return await Utilities.query().insert({
      code,
      label,
      description,
    });
  }
}

module.exports = UtilitiesRepository;
