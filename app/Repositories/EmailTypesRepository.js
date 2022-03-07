const EmailTypes = require('../Models/EmailTypes');

class EmailTypesRepository {
  static async emailTypes() {
    return await EmailTypes.query();
  }

  static async getEmailType(id) {
    return await EmailTypes.query().findById(id);
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
