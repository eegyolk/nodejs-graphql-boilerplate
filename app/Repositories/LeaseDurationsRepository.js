const { raw } = require('objection');

const LeaseDurations = require('../Models/LeaseDurations');

class LeaseDurationsRepository {
  static async leaseDurations(fields) {
    return await LeaseDurations.query().select(raw(fields));
  }

  static async getLeaseDuration(id, fields) {
    return await LeaseDurations.query().select(raw(fields)).findById(id);
  }

  static async getLeaseDurations(ids, fields) {
    return await LeaseDurations.query().select(raw(fields)).whereIn('id', ids);
  }

  static async createLeaseDuration(input) {
    const { code, label, description } = input;

    return await LeaseDurations.query().insert({
      code,
      label,
      description,
    });
  }
}

module.exports = LeaseDurationsRepository;
