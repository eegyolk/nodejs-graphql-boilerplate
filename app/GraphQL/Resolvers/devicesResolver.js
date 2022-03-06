const DevicesRepository = require('../../Repositories/DevicesRepository');

const getDevices = async () => {
  return await DevicesRepository.getDevices();
};

module.exports = {
  getDevices,
};
