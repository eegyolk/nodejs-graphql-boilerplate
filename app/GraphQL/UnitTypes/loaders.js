const DataLoader = require('dataloader');

const UnitTypesRepository = require('../../Repositories/UnitTypesRepository');
const Utilities = require('../../Classes/Utilities');

const getUnitTypesLoader = async (idsAndFields) => {
  const { ids, fields } = Utilities.extractIdsAndFields(idsAndFields);

  return await UnitTypesRepository.getUnitTypes(ids, fields);
};

module.exports = {
  unitTypes: new DataLoader(getUnitTypesLoader),
};
