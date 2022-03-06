const PersonasRepository = require('../../Repositories/PersonasRepository');

const getPersonasResolver = async () => {
  return await PersonasRepository.getPersonas();
};

const getPersonaResolver = async (id) => {
  return await PersonasRepository.getPersona(id);
};

module.exports = {
  getPersonasResolver,
  getPersonaResolver,
};
