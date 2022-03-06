const EmailTypes = require('../Models/EmailTypes');

class EmailTypesRepository {
  static async getEmailTypes() {
    return await EmailTypes.query();
  }
}

module.exports = EmailTypesRepository;
