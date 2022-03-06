const RolesRepository = require('../../Repositories/RolesRepository');

const getRolesResolver = async () => {
  return await RolesRepository.getRoles();
};

const getRoleResolver = async (id) => {
  return await RolesRepository.getRole(id);
};

module.exports = {
  getRolesResolver,
  getRoleResolver,
};
