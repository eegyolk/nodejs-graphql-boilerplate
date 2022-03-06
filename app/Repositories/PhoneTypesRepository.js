const PhoneTypes = require('../Models/PhoneTypes');

class PhoneTypesRepository {
  static async getPhoneTypes() {
    return await PhoneTypes.query();
  }

  static async getPhoneType(id) {
    return await PhoneTypes.query().findById(id);
  }
}

module.exports = PhoneTypesRepository;
