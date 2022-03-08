const graphqlFields = require('graphql-fields');

const UserAddressesRepository = require('../../Repositories/UserAddressesRepository');

const userAddressesResolver = async (info) => {
  const fields = Object.keys(
    graphqlFields(info, {}, { excludedFields: ['user', 'address_type'] })
  );

  return await UserAddressesRepository.userAddresses(fields.join(','));
};

const getUserAddressResolver = async (id, info) => {
  const fields = Object.keys(
    graphqlFields(info, {}, { excludedFields: ['user', 'address_type'] })
  );

  return await UserAddressesRepository.getUserAddress(id, fields.join(','));
};

const createUserAddressResolver = async (args) => {
  return await UserAddressesRepository.createUserAddress(args.input);
};

module.exports = {
  userAddressesResolver,
  getUserAddressResolver,
  createUserAddressResolver,
};
