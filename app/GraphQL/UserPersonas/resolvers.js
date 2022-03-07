const UserPersonasRepository = require('../../Repositories/UserPersonasRepository');

const userPersonasResolver = async () => {
  return await UserPersonasRepository.userPersonas();
};

const getUserPersonaResolver = async (id) => {
  return await UserPersonasRepository.getUserPersona(id);
};

const createUserPersonaResolver = async (args) => {
  return await UserPersonasRepository.createUserPersona(args.input);
};

module.exports = {
  userPersonasResolver,
  getUserPersonaResolver,
  createUserPersonaResolver,
};
