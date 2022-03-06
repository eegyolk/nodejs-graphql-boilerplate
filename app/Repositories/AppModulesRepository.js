const AppModules = require('../Models/AppModules');

class AppModulesRepository {
  static async getAppModules() {
    return await AppModules.query();
  }

  static async getAppModule(id) {
    return await AppModules.query().findById(id);
  }
}

module.exports = AppModulesRepository;
