const { raw } = require('objection');

const PropertyPublicTransports = require('../Models/PropertyPublicTransports');

class PropertyPublicTransportsRepository {
  static async propertyPublicTransports(fields) {
    return await PropertyPublicTransports.query().select(raw(fields));
  }

  static async getPropertyPublicTransport(id, fields) {
    return await PropertyPublicTransports.query()
      .select(raw(fields))
      .findById(id);
  }

  static async createPropertyPublicTransport(input) {
    const { property_id, public_transport_id } = input;

    return await PropertyPublicTransports.query().insert({
      property_id,
      public_transport_id,
    });
  }
}

module.exports = PropertyPublicTransportsRepository;
