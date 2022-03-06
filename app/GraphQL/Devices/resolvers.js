const DevicesRepository = require('../../Repositories/DevicesRepository');

const getDevicesResolver = async () => {
  return await DevicesRepository.getDevices();
};

const getDeviceResolver = async (id) => {
  return await DevicesRepository.getDevice(id);
};

module.exports = {
  getDevicesResolver,
  getDeviceResolver,
};
