const UserPersonas = require('../Models/UserPersonas');

class UserPersonasRepository {
  static async getUserPersonas() {
    return await UserPersonas.query();
  }
}

module.exports = UserPersonasRepository;
