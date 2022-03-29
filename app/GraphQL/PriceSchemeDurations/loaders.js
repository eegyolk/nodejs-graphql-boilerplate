const DataLoader = require('dataloader');

const PriceSchemeDurationsRepository = require('../../Repositories/PriceSchemeDurationsRepository');
const Utilities = require('../../Classes/Utilities');

const getPriceSchemeDurationsLoader = async (idsAndFields) => {
  const { ids, fields } = Utilities.extractIdsAndFields(idsAndFields);

  return await PriceSchemeDurationsRepository.getPriceSchemeDurations(
    ids,
    fields
  );
};

module.exports = {
  priceSchemeDurations: new DataLoader(getPriceSchemeDurationsLoader),
};
