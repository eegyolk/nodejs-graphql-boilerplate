const DataLoader = require('dataloader');

const UtilitiesRepository = require('../../Repositories/UtilitiesRepository');
const Utilities = require('../../Classes/Utilities');

const getUtilitiesLoader = async (idsAndFields) => {
  const { ids, fields } = Utilities.extractIdsAndFields(idsAndFields);

  return await UtilitiesRepository.getUtilities(ids, fields);
};

module.exports = {
  utilities: new DataLoader(getUtilitiesLoader),
};
