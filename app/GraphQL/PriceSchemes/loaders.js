const PriceSchemesRepository = require('../../Repositories/PriceSchemesRepository');
const Utilities = require('../../Classes/Utilities');

const getPriceSchemesLoader = async (idsAndFields) => {
  const { ids, fields } = Utilities.extractIdsAndFields(idsAndFields);

  return await PriceSchemesRepository.getPriceSchemes(ids, fields);
};

module.exports = {
  getPriceSchemesLoader,
};
