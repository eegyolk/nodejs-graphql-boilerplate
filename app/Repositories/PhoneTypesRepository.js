const PhoneTypes = require('../Models/PhoneTypes');

class PhoneTypesRepository {
  static async getPhoneTypes() {
    return await PhoneTypes.query();
  }
}

module.exports = PhoneTypesRepository;
