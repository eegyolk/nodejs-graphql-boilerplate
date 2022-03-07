const { GraphQLError } = require('graphql');

const RolesRepository = require('../../Repositories/RolesRepository');

const rolesResolver = async () => {
  const result = await RolesRepository.roles();

  if (result.length > 0) {
    return result;
  }

  return new GraphQLError('No data found', {});
};

const getRoleResolver = async (id) => {
  const result = await RolesRepository.getRole(id);

  if (result) {
    return result;
  }

  return new GraphQLError(`No data found for id ${id}`, {});
};

const getRolesResolver = async (ids) => {
  const result = await RolesRepository.getRoles(ids);

  if (result.length > 0) {
    return result;
  }

  return new GraphQLError(`No data found for id ${id}`, {});
};

const createRoleResolver = async (args) => {
  return await RolesRepository.createRole(args.input);
};

module.exports = {
  rolesResolver,
  getRoleResolver,
  getRolesResolver,
  createRoleResolver,
};
