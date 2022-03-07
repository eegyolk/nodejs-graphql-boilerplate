const UserEmailsRepository = require('../../Repositories/UserEmailsRepository');

const userEmailsResolver = async () => {
  return await UserEmailsRepository.userEmails();
};

const getUserEmailResolver = async (id) => {
  return await UserEmailsRepository.getUserEmail(id);
};

const createUserEmailResolver = async (args) => {
  return await UserEmailsRepository.createUserEmail(args.input);
};

module.exports = {
  userEmailsResolver,
  getUserEmailResolver,
  createUserEmailResolver,
};
