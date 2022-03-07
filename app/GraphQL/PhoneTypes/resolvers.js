const { GraphQLError } = require('graphql');

const PhoneTypesRepository = require('../../Repositories/PhoneTypesRepository');

const phoneTypesResolver = async () => {
  const result = await PhoneTypesRepository.phoneTypes();

  if (result.length > 0) {
    return result;
  }

  return new GraphQLError('No data found', {});
};

const getPhoneTypeResolver = async (id) => {
  const result = await PhoneTypesRepository.getPhoneType(id);

  if (result) {
    return result;
  }

  return new GraphQLError(`No data found for id ${id}`, {});
};

const createPhoneTypeResolver = async (args) => {
  return await PhoneTypesRepository.createPhoneType(args.input);
};

module.exports = {
  phoneTypesResolver,
  getPhoneTypeResolver,
  createPhoneTypeResolver,
};
