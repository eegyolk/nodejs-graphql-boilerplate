const PersonasRepository = require('../../Repositories/PersonasRepository');

const personasResolver = async () => {
  return await PersonasRepository.personas();
};

const getPersonaResolver = async (id) => {
  return await PersonasRepository.getPersona(id);
};

const createPersonaResolver = async (args) => {
  return await PersonasRepository.createPersona(args.input);
};

module.exports = {
  personasResolver,
  getPersonaResolver,
  createPersonaResolver,
};
