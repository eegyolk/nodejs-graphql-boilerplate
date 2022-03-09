const crypto = require('crypto-js');
const graphqlFields = require('graphql-fields');

const DevicesRepository = require('../../Repositories/DevicesRepository');
const excludedFields = require('./excludedFields');

const devicesResolver = async (info) => {
  const fields = Object.keys(graphqlFields(info, {}, { excludedFields }));

  return await DevicesRepository.devices(fields.join(','));
};

const getDeviceResolver = async (id, info) => {
  const fields = Object.keys(graphqlFields(info, {}, { excludedFields }));

  return await DevicesRepository.getDevice(id, fields.join(','));
};

const getDeviceIdByUserIdResolver = async (userId) => {
  const result = await DevicesRepository.getDeviceIdByUserId(userId);

  return result.map((item) => item.id);
};

const createDeviceResolver = async (args) => {
  const { input } = args;

  input['user_agent_md5'] = crypto.MD5(input.user_agent).toString();

  return await DevicesRepository.createDevice(input);
};

module.exports = {
  devicesResolver,
  getDeviceResolver,
  getDeviceIdByUserIdResolver,
  createDeviceResolver,
};
