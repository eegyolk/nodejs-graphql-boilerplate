const graphqlFields = require('graphql-fields');

const AppModulesRepository = require('../../Repositories/AppModulesRepository');

const appModulesResolver = async (info) => {
  const fields = Object.keys(graphqlFields(info));

  return await AppModulesRepository.appModules(fields.join(','));
};

const getAppModuleResolver = async (id, info) => {
  const fields = Object.keys(graphqlFields(info));

  return await AppModulesRepository.getAppModule(id, fields.join(','));
};

const createAppModuleResolver = async (args) => {
  return await AppModulesRepository.createAppModule(args.input);
};

module.exports = {
  appModulesResolver,
  getAppModuleResolver,
  createAppModuleResolver,
};
