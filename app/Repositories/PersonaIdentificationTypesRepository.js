const { raw } = require('objection');

const PersonaIdentificationTypes = require('../Models/PersonaIdentificationTypes');

class PersonaIdentificationTypesRepository {
  static async personaIdentificationTypes(fields) {
    return await PersonaIdentificationTypes.query().select(raw(fields));
  }

  static async getPersonaIdentificationType(id, fields) {
    return await PersonaIdentificationTypes.query()
      .select(raw(fields))
      .findById(id);
  }

  static async getPersonaIdentificationTypeByPersonaId(personaId) {
    return await PersonaIdentificationTypes.query()
      .select('id')
      .where('persona_id', personaId);
  }

  static async createPersonaIdentificationType(input) {
    const { persona_id, identification_type_id, is_required } = input;

    return await PersonaIdentificationTypes.query().insert({
      persona_id,
      identification_type_id,
      is_required,
    });
  }
}

module.exports = PersonaIdentificationTypesRepository;
