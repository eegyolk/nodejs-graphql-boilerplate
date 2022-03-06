const AppModules = require('../../Models/AppModules');

class AppModulesRepository {
  static async getAppModules() {
    return await AppModules.query();
  }
}

module.exports = AppModulesRepository;
