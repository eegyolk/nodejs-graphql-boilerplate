const DataLoader = require('dataloader');

const PropertyTypesRepository = require('../../Repositories/PropertyTypesRepository');
const Utilities = require('../../Classes/Utilities');

const getPropertyTypesLoader = async (idsAndFields) => {
  const { ids, fields } = Utilities.extractIdsAndFields(idsAndFields);

  return await PropertyTypesRepository.getPropertyTypes(ids, fields);
};

module.exports = {
  propertyTypes: new DataLoader(getPropertyTypesLoader),
};
