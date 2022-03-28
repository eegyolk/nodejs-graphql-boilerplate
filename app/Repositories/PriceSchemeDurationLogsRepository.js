const { raw } = require('objection');

const PriceSchemeDurationLogs = require('../Models/PriceSchemeDurationLogs');

class PriceSchemeDurationLogsRepository {
  static async priceSchemeDurationLogs(fields) {
    return await PriceSchemeDurationLogs.query().select(raw(fields));
  }

  static async getPriceSchemeDurationLog(id, fields) {
    return await PriceSchemeDurationLogs.query()
      .select(raw(fields))
      .findById(id);
  }

  static async getPriceSchemeDurationLog(ids, fields) {
    return await PriceSchemeDurationLogs.query()
      .select(raw(fields))
      .whereIn('id', ids);
  }

  static async createPriceSchemeDurationLog(input) {
    const { price_scheme_duration_id, old_data, new_data, remarks } = input;

    return await PriceSchemeDurationLogs.query().insert({
      price_scheme_duration_id,
      old_data,
      new_data,
      remarks,
    });
  }
}

module.exports = PriceSchemeDurationLogsRepository;
