const { Model } = require('objection');

class IdentificationTypes extends Model {
  static get tableName() {
    return 'identification_types';
  }
}

module.exports = IdentificationTypes;
