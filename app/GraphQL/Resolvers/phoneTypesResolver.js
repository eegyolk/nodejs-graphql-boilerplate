const PhoneTypesRepository = require('../../Repositories/PhoneTypesRepository');

const getPhoneTypes = async () => {
  return await PhoneTypesRepository.getPhoneTypes();
};

module.exports = {
  getPhoneTypes,
};
