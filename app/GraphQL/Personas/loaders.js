const PersonasRepository = require('../../Repositories/PersonasRepository');
const Utilities = require('../../Classes/Utilities');

const getPersonasLoader = async (idsAndFields) => {
  const { ids, fields } = Utilities.extractIdsAndFields(idsAndFields);

  return await PersonasRepository.getPersonas(ids, fields);
};

module.exports = {
  getPersonasLoader,
};
