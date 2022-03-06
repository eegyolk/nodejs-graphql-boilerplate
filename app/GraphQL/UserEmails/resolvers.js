const UserEmailsRepository = require('../../Repositories/UserEmailsRepository');

const getUserEmailsResolver = async () => {
  return await UserEmailsRepository.getUserEmails();
};

const getUserEmailResolver = async (id) => {
  return await UserEmailsRepository.getUserEmail(id);
};

module.exports = {
  getUserEmailsResolver,
  getUserEmailResolver,
};
