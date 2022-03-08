const { raw } = require('objection');

const Personas = require('../Models/Personas');

class PersonasRepository {
  static async personas(fields) {
    return await Personas.query().select(raw(fields));
  }

  static async getPersona(id, fields) {
    return await Personas.query().select(raw(fields)).findById(id);
  }

  static async getPersonas(ids, fields) {
    return await Personas.query().select(raw(fields)).whereIn('id', ids);
  }

  static async createPersona(input) {
    const { code, label, description, is_active } = input;

    return await Personas.query().insert({
      code,
      label,
      description,
      is_active,
    });
  }
}

module.exports = PersonasRepository;
