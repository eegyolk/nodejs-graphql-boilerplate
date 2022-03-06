const RolesRepository = require('../../Repositories/RolesRepository');

const getRoles = async () => {
  return await RolesRepository.getRoles();
};

module.exports = {
  getRoles,
};
