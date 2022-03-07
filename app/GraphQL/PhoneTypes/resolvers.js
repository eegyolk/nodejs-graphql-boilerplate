const { GraphQLError } = require('graphql');

const PhoneTypesRepository = require('../../Repositories/PhoneTypesRepository');

const getPhoneTypesResolver = async () => {
  const result = await PhoneTypesRepository.getPhoneTypes();

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
  getPhoneTypesResolver,
  getPhoneTypeResolver,
  createPhoneTypeResolver,
};
