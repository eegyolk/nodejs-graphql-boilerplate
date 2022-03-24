const IdentificationTypesRepository = require('../../Repositories/IdentificationTypesRepository');
const Utilities = require('../../Classes/Utilities');

const getIdentificationTypesLoader = async (idsAndFields) => {
  const { ids, fields } = Utilities.extractIdsAndFields(idsAndFields);

  return await IdentificationTypesRepository.getIdentificationTypes(
    ids,
    fields
  );
};

module.exports = {
  getIdentificationTypesLoader,
};
