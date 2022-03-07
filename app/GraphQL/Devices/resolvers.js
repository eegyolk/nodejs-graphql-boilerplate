const DevicesRepository = require('../../Repositories/DevicesRepository');

const devicesResolver = async () => {
  return await DevicesRepository.devices();
};

const getDeviceResolver = async (id) => {
  return await DevicesRepository.getDevice(id);
};

const createDeviceResolver = async (args) => {
  return await DevicesRepository.createDevice(args.input);
};

module.exports = {
  devicesResolver,
  getDeviceResolver,
  createDeviceResolver,
};
