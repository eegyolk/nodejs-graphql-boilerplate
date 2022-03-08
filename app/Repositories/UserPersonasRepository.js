const { raw } = require('objection');

const UserPersonas = require('../Models/UserPersonas');

class UserPersonasRepository {
  static async userPersonas(fields) {
    return await UserPersonas.query().select(raw(fields));
  }

  static async getUserPersona(id, fields) {
    return await UserPersonas.query().select(raw(fields)).findById(id);
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
