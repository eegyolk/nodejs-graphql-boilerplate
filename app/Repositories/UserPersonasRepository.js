const UserPersonas = require('../Models/UserPersonas');

class UserPersonasRepository {
  static async getUserPersonas() {
    return await UserPersonas.query();
  }

  static async getUserPersona(id) {
    return await UserPersonas.query().findById(id);
  }

  static async createUserPersona(input) {
    const { user_id, persona_id, is_default } = input;

    return await UserPersonas.query().insert({
      user_id,
      persona_id,
      is_default,
    });
  }
}

module.exports = UserPersonasRepository;
