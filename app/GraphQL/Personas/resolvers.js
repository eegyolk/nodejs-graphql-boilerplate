const PersonasRepository = require('../../Repositories/PersonasRepository');

const getPersonasResolver = async () => {
  return await PersonasRepository.getPersonas();
};

const getPersonaResolver = async (id) => {
  return await PersonasRepository.getPersona(id);
};

const createPersonaResolver = async (args) => {
  return await PersonasRepository.createPersona(args.input);
};

module.exports = {
  getPersonasResolver,
  getPersonaResolver,
  createPersonaResolver,
};
