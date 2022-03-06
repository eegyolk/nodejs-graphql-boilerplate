const Personas = require('../Models/Personas');

class PersonasRepository {
  static async getPersonas() {
    return await Personas.query();
  }

  static async getPersona(id) {
    return await Personas.query().findById(id);
  }
}

module.exports = PersonasRepository;
