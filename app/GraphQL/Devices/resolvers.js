const { GraphQLError } = require('graphql');

const DevicesRepository = require('../../Repositories/DevicesRepository');

const devicesResolver = async () => {
  const result = await DevicesRepository.devices();

  if (result.length > 0) {
    return result;
  }

  return new GraphQLError('No data found', {});
};

const getDeviceResolver = async (id) => {
  const result = await DevicesRepository.getDevice(id);

  if (result) {
    return result;
  }

  return new GraphQLError(`No data found for id ${id}`, {});
};

const getDevicesResolver = async (ids) => {
  const result = await DevicesRepository.getDevices(ids);

  if (result.length > 0) {
    return result;
  }

  return new GraphQLError(`No data found for id ${ids}`, {});
};

const createDeviceResolver = async (args) => {
  return await DevicesRepository.createDevice(args.input);
};

module.exports = {
  devicesResolver,
  getDeviceResolver,
  getDevicesResolver,
  createDeviceResolver,
};
