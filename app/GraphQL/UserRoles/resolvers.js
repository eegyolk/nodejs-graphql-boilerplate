const { GraphQLError } = require('graphql');

const UserRolesRepository = require('../../Repositories/UserRolesRepository');

const userRolesResolver = async () => {
  const result = await UserRolesRepository.userRoles();

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

const createUserRoleResolver = async (args) => {
  return await UserRolesRepository.createUserRole(args.input);
};

module.exports = {
  userRolesResolver,
  getUserRoleResolver,
  createUserRoleResolver,
};
