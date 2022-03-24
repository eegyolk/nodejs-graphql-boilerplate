const { Model } = require('objection');

class PersonaIdentificationTypes extends Model {
  static get tableName() {
    return 'persona_identification_types';
  }
}

module.exports = PersonaIdentificationTypes;
