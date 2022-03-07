const UserEmails = require('../Models/UserEmails');

class UserEmailsRepository {
  static async getUserEmails() {
    return await UserEmails.query();
  }

  static async getUserEmail(id) {
    return await UserEmails.query().findById(id);
  }

  static async createUserEmail(input) {
    const { user_id, email_type_id, email_address, is_default, rank } = input;

    return await UserAddresses.query().insert({
      user_id,
      email_type_id,
      email_address,
      is_default,
      rank,
    });
  }
}

module.exports = UserEmailsRepository;
