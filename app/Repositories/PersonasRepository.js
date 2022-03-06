const Personas = require('../Models/Personas');

class PersonasRepository {
  static async getPersonas() {
    return await Personas.query();
  }
}

module.exports = PersonasRepository;
