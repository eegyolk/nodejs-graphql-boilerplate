const { createUserSocialNetworkInputType } = require('./inputTypes'),
  { createUserSocialNetworkResolver } = require('./resolvers'),
  { userSocialNetworksType } = require('./types');

const createUserSocialNetwork = {
  type: userSocialNetworksType,
  args: {
    input: { type: createUserSocialNetworkInputType },
  },
  resolve: async (source, args) => await createUserSocialNetworkResolver(args),
};

module.exports = {
  createUserSocialNetwork,
};
