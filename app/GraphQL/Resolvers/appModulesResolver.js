const AppModulesRepository = require('../../Repositories/AppModulesRepository');

const getAppModules = async () => {
  return await AppModulesRepository.getAppModules();
};

module.exports = {
  getAppModules,
};
