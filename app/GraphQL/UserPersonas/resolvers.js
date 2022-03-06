const UserPersonasRepository = require('../../Repositories/UserPersonasRepository');

const getUserPersonasResolver = async () => {
  return await UserPersonasRepository.getUserPersonas();
};

const getUserPersonaResolver = async (id) => {
  return await UserPersonasRepository.getUserPersona(id);
};

module.exports = {
  getUserPersonasResolver,
  getUserPersonaResolver,
};
