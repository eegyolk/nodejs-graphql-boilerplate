const Personas = require('../Models/Personas');

class PersonasRepository {
  static async personas() {
    return await Personas.query();
  }

  static async getPersona(id) {
    return await Personas.query().findById(id);
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
