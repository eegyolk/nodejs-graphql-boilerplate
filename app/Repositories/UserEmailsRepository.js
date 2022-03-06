const UserEmails = require('../../Models/UserEmails');

class UserEmailsRepository {
  static async getUserEmails() {
    return await UserEmails.query();
  }
}

module.exports = UserEmailsRepository;
