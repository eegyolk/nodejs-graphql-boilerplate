const PhoneTypesRepository = require('../../Repositories/PhoneTypesRepository');

const phoneTypesResolver = async () => {
  return await PhoneTypesRepository.phoneTypes();
};

const getPhoneTypeResolver = async (id) => {
  return await PhoneTypesRepository.getPhoneType(id);
};

const createPhoneTypeResolver = async (args) => {
  return await PhoneTypesRepository.createPhoneType(args.input);
};

module.exports = {
  phoneTypesResolver,
  getPhoneTypeResolver,
  createPhoneTypeResolver,
};
