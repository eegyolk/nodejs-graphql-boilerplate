const { Model } = require('objection');

class PublicTransports extends Model {
  static get tableName() {
    return 'public_transports';
  }
}

module.exports = PublicTransports;
