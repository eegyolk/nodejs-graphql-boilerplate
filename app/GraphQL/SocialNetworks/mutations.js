const { createSocialNetworkInputType } = require('./inputTypes'),
  { createSocialNetworkResolver } = require('./resolvers'),
  { socialNetworksType } = require('./types');

const createSocialNetwork = {
  type: socialNetworksType,
  args: {
    input: { type: createSocialNetworkInputType },
  },
  resolve: async (source, args) => await createSocialNetworkResolver(args),
};

module.exports = {
  createSocialNetwork,
};
