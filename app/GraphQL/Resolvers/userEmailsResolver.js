const UserEmailsRepository = require('../../Repositories/UserEmailsRepository');

const getUserEmails = async () => {
  return await UserEmailsRepository.getUserEmails();
};

module.exports = {
  getUserEmails,
};
