const UserAddressesRepository = require('../../Repositories/UserAddressesRepository');

const getUserAddressesResolvers = async () => {
  return await UserAddressesRepository.getUserAddresses();
};

const getUserAddressResolvers = async (id) => {
  return await UserAddressesRepository.getUserAddress(id);
};

module.exports = {
  getUserAddressesResolvers,
  getUserAddressResolvers,
};
