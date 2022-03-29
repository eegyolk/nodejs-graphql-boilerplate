const DataLoader = require('dataloader');

const AmenitiesRepository = require('../../Repositories/AmenitiesRepository');
const Utilities = require('../../Classes/Utilities');

const getAmenitiesLoader = async (idsAndFields) => {
  const { ids, fields } = Utilities.extractIdsAndFields(idsAndFields);

  return await AmenitiesRepository.getAmenities(ids, fields);
};

module.exports = {
  amenities: new DataLoader(getAmenitiesLoader),
};
