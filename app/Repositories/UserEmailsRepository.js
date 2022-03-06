const UserEmails = require('../Models/UserEmails');

class UserEmailsRepository {
  static async getUserEmails() {
    return await UserEmails.query();
  }

  static async getUserEmail(id) {
    return await UserEmails.query().findById(id);
  }
}

module.exports = UserEmailsRepository;
