const UserPhonesRepository = require('../../Repositories/UserPhonesRepository');

const getUserPhonesResolver = async () => {
  return await UserPhonesRepository.getUserPhones();
};

const getUserPhoneResolver = async (id) => {
  return await UserPhonesRepository.getUserPhone(id);
};

module.exports = {
  getUserPhonesResolver,
  getUserPhoneResolver,
};
