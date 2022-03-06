const UserAddressesRepository = require('../../Repositories/UserAddressesRepository');

const getUserAddresses = async () => {
  return await UserAddressesRepository.getUserAddresses();
};

module.exports = {
  getUserAddresses,
};
