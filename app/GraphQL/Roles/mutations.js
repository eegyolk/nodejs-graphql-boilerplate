const { createRoleInputType } = require('./inputTypes'),
  { createRoleResolver } = require('./resolvers'),
  { rolesType } = require('./types');

const createRole = {
  type: rolesType,
  args: {
    input: { type: createRoleInputType },
  },
  resolve: async (source, args) => await createRoleResolver(args),
};

module.exports = {
  createRole,
};
