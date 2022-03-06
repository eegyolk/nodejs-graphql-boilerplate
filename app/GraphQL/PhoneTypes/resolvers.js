const PhoneTypesRepository = require('../../Repositories/PhoneTypesRepository');

const getPhoneTypesResolver = async () => {
  return await PhoneTypesRepository.getPhoneTypes();
};

const getPhoneTypeResolver = async (id) => {
  return await PhoneTypesRepository.getPhoneType(id);
};

module.exports = {
  getPhoneTypesResolver,
  getPhoneTypeResolver,
};
