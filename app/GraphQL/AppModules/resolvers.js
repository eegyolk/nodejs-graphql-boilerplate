const { GraphQLError } = require('graphql');

const AppModulesRepository = require('../../Repositories/AppModulesRepository');

const appModulesResolver = async () => {
  const result = await AppModulesRepository.appModules();

  if (result.length > 0) {
    return result;
  }

  return new GraphQLError('No data found', {});
};

const getAppModuleResolver = async (id) => {
  const result = await AppModulesRepository.getAppModule(id);

  if (result) {
    return result;
  }

  return new GraphQLError(`No data found for id ${id}`, {});
};

const createAppModuleResolver = async (args) => {
  return await AppModulesRepository.createAppModule(args.input);
};

module.exports = {
  appModulesResolver,
  getAppModuleResolver,
  createAppModuleResolver,
};
