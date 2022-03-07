const PersonasRepository = require('../../Repositories/PersonasRepository');

const getPersonasLoader = async (ids) => {
  return await PersonasRepository.getPersonas(ids);
};

module.exports = {
  getPersonasLoader,
};
