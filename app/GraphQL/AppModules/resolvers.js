const AppModulesRepository = require('../../Repositories/AppModulesRepository');

const appModulesResolver = async () => {
  return await AppModulesRepository.appModules();
};

const getAppModuleResolver = async (id) => {
  return await AppModulesRepository.getAppModule(id);
};

const createAppModuleResolver = async (args) => {
  return await AppModulesRepository.createAppModule(args.input);
};

module.exports = {
  appModulesResolver,
  getAppModuleResolver,
  createAppModuleResolver,
};
