const { GraphQLError } = require('graphql');

const DevicesRepository = require('../../Repositories/DevicesRepository');

const getDevicesResolver = async () => {
  const result = await DevicesRepository.getDevices();

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

module.exports = {
  getDevicesResolver,
  getDeviceResolver,
};
