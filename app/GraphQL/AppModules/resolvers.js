const AppModulesRepository = require('../../Repositories/AppModulesRepository');

const getAppModulesResolver = async () => {
  return await AppModulesRepository.getAppModules();
};

const getAppModuleResolver = async (id) => {
  return await AppModulesRepository.getAppModule(id);
};

module.exports = {
  getAppModulesResolver,
  getAppModuleResolver,
};
