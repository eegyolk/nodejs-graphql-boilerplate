const UserRolesRepository = require('../../Repositories/UserRolesRepository');

const getUserRolesResolver = async () => {
  return await UserRolesRepository.getUserRoles();
};

const getUserRoleResolver = async (id) => {
  return await UserRolesRepository.getUserRole(id);
};

module.exports = {
  getUserRolesResolver,
  getUserRoleResolver,
};
