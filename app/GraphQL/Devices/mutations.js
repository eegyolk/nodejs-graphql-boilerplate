const { createDeviceInputType } = require('./inputTypes'),
  { createDeviceResolver } = require('./resolvers'),
  { devicesType } = require('./types');

const createDevice = {
  type: devicesType,
  args: {
    input: { type: createDeviceInputType },
  },
  resolve: async (source, args) => await createDeviceResolver(args),
};

module.exports = {
  createDevice,
};
