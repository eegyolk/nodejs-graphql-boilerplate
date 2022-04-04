const { raw } = require('objection');

const PublicTransports = require('../Models/PublicTransports');

class PublicTransportsRepository {
  static async publicTransports(fields) {
    return await PublicTransports.query().select(raw(fields));
  }

  static async getPublicTransport(id, fields) {
    return await PublicTransports.query().select(raw(fields)).findById(id);
  }

  static async getPublicTransports(ids, fields) {
    return await PublicTransports.query()
      .select(raw(fields))
      .whereIn('id', ids);
  }

  static async creatPublicTransport(input) {
    const { code, label, description } = input;

    return await PublicTransports.query().insert({
      code,
      label,
      description,
    });
  }
}

module.exports = PublicTransportsRepository;
