const RolesRepository = require('../../Repositories/RolesRepository');

const rolesResolver = async () => {
  return await RolesRepository.roles();
};

const getRoleResolver = async (id) => {
  return await RolesRepository.getRole(id);
};

const createRoleResolver = async (args) => {
  return await RolesRepository.createRole(args.input);
};

module.exports = {
  rolesResolver,
  getRoleResolver,
  createRoleResolver,
};
