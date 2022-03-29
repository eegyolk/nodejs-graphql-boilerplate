const { createUserRoleInputType } = require('./inputTypes'),
  { createUserRoleResolver } = require('./resolvers'),
  { userRolesType } = require('./types');

const createUserRole = {
  type: userRolesType,
  args: {
    input: { type: createUserRoleInputType },
  },
  resolve: async (source, args) => await createUserRoleResolver(args),
};

module.exports = {
  createUserRole,
};
