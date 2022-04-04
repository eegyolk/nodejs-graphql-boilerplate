const { Model } = require('objection');

class PropertyPublicTransports extends Model {
  static get tableName() {
    return 'property_public_transports';
  }
}

module.exports = PropertyPublicTransports;
