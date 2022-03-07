const AppModules = require('../Models/AppModules');

class AppModulesRepository {
  static async appModules() {
    return await AppModules.query();
  }

  static async getAppModule(id) {
    return await AppModules.query().findById(id);
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
