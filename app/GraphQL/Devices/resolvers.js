const crypto = require('crypto-js');

const DevicesRepository = require('../../Repositories/DevicesRepository');

const devicesResolver = async () => {
  return await DevicesRepository.devices();
};

const getDeviceResolver = async (id) => {
  return await DevicesRepository.getDevice(id);
};

const createDeviceResolver = async (args) => {
  const { input } = args;

  input['user_agent_md5'] = crypto.MD5(input.user_agent).toString();

  return await DevicesRepository.createDevice(input);
};

module.exports = {
  devicesResolver,
  getDeviceResolver,
  createDeviceResolver,
};
