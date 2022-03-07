const { GraphQLError } = require('graphql');

const AppModulesRepository = require('../../Repositories/AppModulesRepository');

const getAppModulesResolver = async () => {
  const result = await AppModulesRepository.getAppModules();

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

module.exports = {
  getAppModulesResolver,
  getAppModuleResolver,
};
