const graphqlFields = require('graphql-fields');

const excludedFields = require('./excludedFields');
const UserRolesRepository = require('../../Repositories/UserRolesRepository');

const userRolesResolver = async (info) => {
  const fields = Object.keys(graphqlFields(info, {}, { excludedFields }));

  return await UserRolesRepository.userRoles(fields.join(','));
};

const getUserRoleResolver = async (id, info) => {
  const fields = Object.keys(graphqlFields(info, {}, { excludedFields }));

  return await UserRolesRepository.getUserRole(id, fields.join(','));
};

const getUserRoleIdByUserIdResolver = async (userId) => {
  const result = await UserRolesRepository.getUserRoleIdByUserId(userId);

  return result.map((item) => item.id);
};

const createUserRoleResolver = async (args) => {
  return await UserRolesRepository.createUserRole(args.input);
};

module.exports = {
  userRolesResolver,
  getUserRoleResolver,
  getUserRoleIdByUserIdResolver,
  createUserRoleResolver,
};
