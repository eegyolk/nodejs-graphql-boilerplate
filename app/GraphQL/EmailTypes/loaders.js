const EmailTypesRepository = require('../../Repositories/EmailTypesRepository');
const Utilities = require('../../Classes/Utilities');

const getEmailTypesLoader = async (idsAndFields) => {
  const { ids, fields } = Utilities.extractIdsAndFields(idsAndFields);

  return await EmailTypesRepository.getEmailTypes(ids, fields);
};

module.exports = {
  getEmailTypesLoader,
};
