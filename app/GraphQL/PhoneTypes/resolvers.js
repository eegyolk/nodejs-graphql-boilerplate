const graphqlFields = require('graphql-fields');

const PhoneTypesRepository = require('../../Repositories/PhoneTypesRepository');

const phoneTypesResolver = async (info) => {
  const fields = Object.keys(graphqlFields(info));

  return await PhoneTypesRepository.phoneTypes(fields.join(','));
};

const getPhoneTypeResolver = async (id, info) => {
  const fields = Object.keys(graphqlFields(info));

  return await PhoneTypesRepository.getPhoneType(id, fields.join(','));
};

const createPhoneTypeResolver = async (args) => {
  return await PhoneTypesRepository.createPhoneType(args.input);
};

module.exports = {
  phoneTypesResolver,
  getPhoneTypeResolver,
  createPhoneTypeResolver,
};
