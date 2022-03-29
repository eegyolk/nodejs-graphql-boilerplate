const DataLoader = require('dataloader');

const PropertiesRepository = require('../../Repositories/PropertiesRepository');
const Utilities = require('../../Classes/Utilities');

const getPropertiesLoader = async (idsAndFields) => {
  const { ids, fields } = Utilities.extractIdsAndFields(idsAndFields);

  return await PropertiesRepository.getProperties(ids, fields);
};

module.exports = {
  properties: new DataLoader(getPropertiesLoader),
};
