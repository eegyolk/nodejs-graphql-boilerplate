const EmailTypes = require('../Models/EmailTypes');

class EmailTypesRepository {
  static async getEmailTypes() {
    return await EmailTypes.query();
  }

  static async getEmailType(id) {
    return await EmailTypes.query().findById(id);
  }
}

module.exports = EmailTypesRepository;
