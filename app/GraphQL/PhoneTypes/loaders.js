const PhoneTypesRepository = require('../../Repositories/PhoneTypesRepository');

const getPhoneTypesLoader = async (ids) => {
  return await PhoneTypesRepository.getPhoneTypes(ids);
};

module.exports = {
  getPhoneTypesLoader,
};
