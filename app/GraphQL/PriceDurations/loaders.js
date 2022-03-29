const PriceDurationsRepository = require('../../Repositories/PriceDurationsRepository');
const Utilities = require('../../Classes/Utilities');

const getPriceDurationsLoader = async (idsAndFields) => {
  const { ids, fields } = Utilities.extractIdsAndFields(idsAndFields);

  return await PriceDurationsRepository.getPriceDurations(ids, fields);
};

module.exports = {
  getPriceDurationsLoader,
};
