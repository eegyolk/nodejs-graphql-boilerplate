const DevicesRepository = require('../../Repositories/DevicesRepository');

const getDevicesLoader = async (ids) => {
  return await DevicesRepository.getDevices(ids);
};

module.exports = {
  getDevicesLoader,
};
