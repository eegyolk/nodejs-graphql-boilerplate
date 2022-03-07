const UserPhonesRepository = require('../../Repositories/UserPhonesRepository');

const userPhonesResolver = async () => {
  return await UserPhonesRepository.userPhones();
};

const getUserPhoneResolver = async (id) => {
  return await UserPhonesRepository.getUserPhone(id);
};

const createUserPhoneResolver = async (args) => {
  return await UserPhonesRepository.createUserPhone(args.input);
};

module.exports = {
  userPhonesResolver,
  getUserPhoneResolver,
  createUserPhoneResolver,
};
