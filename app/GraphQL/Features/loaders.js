const DataLoader = require('dataloader');

const FeaturesRepository = require('../../Repositories/FeaturesRepository');
const Utilities = require('../../Classes/Utilities');

const getFeaturesLoader = async (idsAndFields) => {
  const { ids, fields } = Utilities.extractIdsAndFields(idsAndFields);

  return await FeaturesRepository.getFeatures(ids, fields);
};

module.exports = {
  features: new DataLoader(getFeaturesLoader),
};
