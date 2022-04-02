const DataLoader = require('dataloader');

const FeaturesAminitiesRepository = require('../../Repositories/FeaturesAminitiesRepository');
const Utilities = require('../../Classes/Utilities');

const getFeaturesAminitiesLoader = async (idsAndFields) => {
  const { ids, fields } = Utilities.extractIdsAndFields(idsAndFields);

  return await FeaturesAminitiesRepository.getFeaturesAminities(ids, fields);
};

module.exports = {
  featuresAminities: new DataLoader(getFeaturesAminitiesLoader),
};
