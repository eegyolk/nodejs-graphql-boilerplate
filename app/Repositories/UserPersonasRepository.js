const UserPersonas = require('../Models/UserPersonas');

class UserPersonasRepository {
  static async getUserPersonas() {
    return await UserPersonas.query();
  }

  static async getUserPersona(id) {
    return await UserPersonas.query().findById(id);
  }
}

module.exports = UserPersonasRepository;
