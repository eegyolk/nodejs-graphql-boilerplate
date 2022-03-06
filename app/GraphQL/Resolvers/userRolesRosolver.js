const UserRolesRepository = require('../../Repositories/UserRolesRepository');

const getUserRoles = async () => {
  return await UserRolesRepository.getUserRoles();
};

module.exports = {
  getUserRoles,
};
