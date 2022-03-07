const { GraphQLError } = require('graphql');

const RolesRepository = require('../../Repositories/RolesRepository');

const getRolesResolver = async () => {
  const result = await RolesRepository.getRoles();

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

const createRoleResolver = async (args) => {
  return await RolesRepository.createRole(args.input);
};

module.exports = {
  getRolesResolver,
  getRoleResolver,
  createRoleResolver,
};
