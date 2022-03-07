const AppModules = require('../Models/AppModules');

class AppModulesRepository {
  static async getAppModules() {
    return await AppModules.query();
  }

  static async getAppModule(id) {
    return await AppModules.query().findById(id);
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
