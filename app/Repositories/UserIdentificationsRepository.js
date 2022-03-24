const { raw } = require('objection');

const UserIdentifications = require('../Models/UserIdentifications');

class UserIdentificationsRepository {
  static async userIdentifications(fields) {
    return await UserIdentifications.query().select(raw(fields));
  }

  static async getUserIdentification(id, fields) {
    return await UserIdentifications.query().select(raw(fields)).findById(id);
  }

  static async getUserIdentificationIdByUserId(userId) {
    return await UserIdentifications.query()
      .select('id')
      .where('user_id', userId);
  }

  static async createUserIdentification(input) {
    const {
      user_id,
      identification_type_id,
      images_url,
      identification_number,
      expiration_date,
      is_default,
    } = input;

    return await UserIdentifications.query().insert({
      user_id,
      identification_type_id,
      images_url,
      identification_number,
      expiration_date,
      is_default,
    });
  }
}

module.exports = UserIdentificationsRepository;
