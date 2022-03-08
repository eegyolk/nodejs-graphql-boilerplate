const graphqlFields = require('graphql-fields');

const RolesRepository = require('../../Repositories/RolesRepository');

const rolesResolver = async (info) => {
  const fields = Object.keys(graphqlFields(info));

  return await RolesRepository.roles(fields.join(','));
};

const getRoleResolver = async (id, info) => {
  const fields = Object.keys(graphqlFields(info));

  return await RolesRepository.getRole(id, fields.join(','));
};

const createRoleResolver = async (args) => {
  return await RolesRepository.createRole(args.input);
};

module.exports = {
  rolesResolver,
  getRoleResolver,
  createRoleResolver,
};
