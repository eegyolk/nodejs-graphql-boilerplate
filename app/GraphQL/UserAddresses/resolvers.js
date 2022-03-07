const UserAddressesRepository = require('../../Repositories/UserAddressesRepository');

const userAddressesResolver = async () => {
  return await UserAddressesRepository.userAddresses();
};

const getUserAddressResolver = async (id) => {
  return await UserAddressesRepository.getUserAddress(id);
};

const createUserAddressResolver = async (args) => {
  return await UserAddressesRepository.createUserAddress(args.input);
};

module.exports = {
  userAddressesResolver,
  getUserAddressResolver,
  createUserAddressResolver,
};
