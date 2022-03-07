const AppModulesRepository = require('../../Repositories/AppModulesRepository');

const getAppModulesLoader = async (ids) => {
  return await AppModulesRepository.getAppModules(ids);
};

module.exports = {
  getAppModulesLoader,
};
