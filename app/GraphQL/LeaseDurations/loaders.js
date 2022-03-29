const DataLoader = require('dataloader');

const LeaseDurationsRepository = require('../../Repositories/LeaseDurationsRepository');
const Utilities = require('../../Classes/Utilities');

const getLeaseDurationsLoader = async (idsAndFields) => {
  const { ids, fields } = Utilities.extractIdsAndFields(idsAndFields);

  return await LeaseDurationsRepository.getLeaseDurations(ids, fields);
};

module.exports = {
  leaseDurations: new DataLoader(getLeaseDurationsLoader),
};
