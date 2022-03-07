const UserRolesRepository = require('../../Repositories/UserRolesRepository');

const userRolesResolver = async () => {
  return await UserRolesRepository.userRoles();
};

const getUserRoleResolver = async (id) => {
  return await UserRolesRepository.getUserRole(id);
};

const createUserRoleResolver = async (args) => {
  return await UserRolesRepository.createUserRole(args.input);
};

module.exports = {
  userRolesResolver,
  getUserRoleResolver,
  createUserRoleResolver,
};
