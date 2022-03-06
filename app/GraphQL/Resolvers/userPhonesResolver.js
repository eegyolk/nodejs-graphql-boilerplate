const UserPhonesRepository = require('../../Repositories/UserPhonesRepository');

const getUserPhones = async () => {
  return await UserPhonesRepository.getUserPhones();
};

module.exports = {
  getUserPhones,
};
