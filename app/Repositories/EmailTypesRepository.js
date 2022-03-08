const { raw } = require('objection');

const EmailTypes = require('../Models/EmailTypes');

class EmailTypesRepository {
  static async emailTypes(fields) {
    return await EmailTypes.query().select(raw(fields));
  }

  static async getEmailType(id, fields) {
    return await EmailTypes.query().select(raw(fields)).findById(id);
  }

  static async getEmailTypes(ids) {
    return await EmailTypes.query().whereIn('id', ids);
  }

  static async createEmailType(input) {
    const { code, label, description, is_default } = input;

    return await Devices.query().insert({
      code,
      label,
      description,
      is_default,
    });
  }
}

module.exports = EmailTypesRepository;
