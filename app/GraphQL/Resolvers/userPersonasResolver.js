const UserPersonasRepository = require('../../Repositories/UserPersonasRepository');

const getUserPersonas = async () => {
  return await UserPersonasRepository.getUserPersonas();
};

module.exports = {
  getUserPersonas,
};
