const graphqlFields = require('graphql-fields');

const excludedFields = require('./excludedFields');
const UserAddressesRepository = require('../../Repositories/UserAddressesRepository');

const userAddressesResolver = async (info) => {
  const fields = Object.keys(graphqlFields(info, {}, { excludedFields }));

  return await UserAddressesRepository.userAddresses(fields.join(','));
};

const getUserAddressResolver = async (id, info) => {
  const fields = Object.keys(graphqlFields(info, {}, { excludedFields }));

  return await UserAddressesRepository.getUserAddress(id, fields.join(','));
};

const getUserAddressIdByUserIdResolver = async (userId) => {
  const result = await UserAddressesRepository.getUserAddressIdByUserId(userId);

  return result.map((item) => item.id);
};

const createUserAddressResolver = async (args) => {
  return await UserAddressesRepository.createUserAddress(args.input);
};

module.exports = {
  userAddressesResolver,
  getUserAddressResolver,
  getUserAddressIdByUserIdResolver,
  createUserAddressResolver,
};
