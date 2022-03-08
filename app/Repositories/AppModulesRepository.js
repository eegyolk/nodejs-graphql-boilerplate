const { raw } = require('objection');

const AppModules = require('../Models/AppModules');

class AppModulesRepository {
  static async appModules(fields) {
    return await AppModules.query().select(raw(fields));
  }

  static async getAppModule(id, fields) {
    return await AppModules.query().select(raw(fields)).findById(id);
  }

  static async getAppModules(ids) {
    return await AppModules.query().whereIn('id', ids);
  }

  static async createAppModule(input) {
    const { code, label, description, is_default } = input;

    return await AppModules.query().insert({
      code,
      label,
      description,
      is_default,
    });
  }
}

module.exports = AppModulesRepository;
