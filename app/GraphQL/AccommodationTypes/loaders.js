const DataLoader = require('dataloader');

const AccommodationTypesRepository = require('../../Repositories/AccommodationTypesRepository');
const Utilities = require('../../Classes/Utilities');

const getAccommodationTypesLoader = async (idsAndFields) => {
  const { ids, fields } = Utilities.extractIdsAndFields(idsAndFields);

  return await AccommodationTypesRepository.getAccommodationTypes(ids, fields);
};

module.exports = {
  accommodationTypes: new DataLoader(getAccommodationTypesLoader),
};
