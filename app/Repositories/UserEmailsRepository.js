const { raw } = require('objection');

const UserEmails = require('../Models/UserEmails');

class UserEmailsRepository {
  static async userEmails(fields) {
    return await UserEmails.query().select(raw(fields));
  }

  static async getUserEmail(id, fields) {
    return await UserEmails.query().select(raw(fields)).findById(id);
  }

  static async createUserEmail(input) {
    const { user_id, email_type_id, email_address, is_default, rank } = input;

    return await UserEmails.query().insert({
      user_id,
      email_type_id,
      email_address,
      is_default,
      rank,
    });
  }
}

module.exports = UserEmailsRepository;
