const { createPublicTransportInputType } = require('./inputTypes'),
  { creatPublicTransportResolver } = require('./resolvers'),
  { publicTransportsType } = require('./types');

const creatPublicTransport = {
  type: publicTransportsType,
  args: {
    input: { type: createPublicTransportInputType },
  },
  resolve: async (source, args) => await creatPublicTransportResolver(args),
};

module.exports = {
  creatPublicTransport,
};
