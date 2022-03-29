const DataLoader = require('dataloader');

const AppModulesRepository = require('../../Repositories/AppModulesRepository');
const Utilities = require('../../Classes/Utilities');

const getAppModulesLoader = async (idsAndFields) => {
  const { ids, fields } = Utilities.extractIdsAndFields(idsAndFields);

  return await AppModulesRepository.getAppModules(ids, fields);
};

module.exports = {
  appModules: new DataLoader(getAppModulesLoader),
};
