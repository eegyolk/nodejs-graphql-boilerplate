const graphqlFields = require('graphql-fields');

const UserRolesRepository = require('../../Repositories/UserRolesRepository');

const userRolesResolver = async (info) => {
  const fields = Object.keys(
    graphqlFields(info, {}, { excludedFields: ['user', 'role'] })
  );

  return await UserRolesRepository.userRoles(fields.join(','));
};

const getUserRoleResolver = async (id, info) => {
  const fields = Object.keys(
    graphqlFields(info, {}, { excludedFields: ['user', 'role'] })
  );

  return await UserRolesRepository.getUserRole(id, fields.join(','));
};

const createUserRoleResolver = async (args) => {
  return await UserRolesRepository.createUserRole(args.input);
};

module.exports = {
  userRolesResolver,
  getUserRoleResolver,
  createUserRoleResolver,
};
