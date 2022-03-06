const PersonasRepository = require('../../Repositories/PersonasRepository');

const getPersonas = async () => {
  return await PersonasRepository.getPersonas();
};

module.exports = {
  getPersonas,
};
