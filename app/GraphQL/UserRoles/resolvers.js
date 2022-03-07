const { GraphQLError } = require('graphql');

const UserRolesRepository = require('../../Repositories/UserRolesRepository');

const getUserRolesResolver = async () => {
  const result = await UserRolesRepository.getUserRoles();

  if (result.length > 0) {
    return result;
  }

  return new GraphQLError('No data found', {});
};

const getUserRoleResolver = async (id) => {
  const result = await UserRolesRepository.getUserRole(id);

  if (result) {
    return result;
  }

  return new GraphQLError(`No data found for id ${id}`, {});
};

module.exports = {
  getUserRolesResolver,
  getUserRoleResolver,
};
