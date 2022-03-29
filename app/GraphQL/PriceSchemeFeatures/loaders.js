const DataLoader = require('dataloader');

const PriceSchemeFeaturesRepository = require('../../Repositories/PriceSchemeFeaturesRepository');
const Utilities = require('../../Classes/Utilities');

const getPriceSchemeFeaturesLoader = async (idsAndFields) => {
  const { ids, fields } = Utilities.extractIdsAndFields(idsAndFields);

  return await PriceSchemeFeaturesRepository.getPriceSchemeFeatures(
    ids,
    fields
  );
};

module.exports = {
  priceSchemeFeatures: new DataLoader(getPriceSchemeFeaturesLoader),
};
