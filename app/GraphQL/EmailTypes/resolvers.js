const { GraphQLError } = require('graphql');

const EmailTypesRepository = require('../../Repositories/EmailTypesRepository');

const emailTypesResolvers = async () => {
  const result = await EmailTypesRepository.emailTypes();

  if (result.length > 0) {
    return result;
  }

  return new GraphQLError('No data found', {});
};

const getEmailTypeResolvers = async (id) => {
  const result = await EmailTypesRepository.getEmailType(id);

  if (result) {
    return result;
  }

  return new GraphQLError(`No data found for id ${id}`, {});
};

const createEmailTypeResolver = async (args) => {
  return await EmailTypesRepository.createEmailType(args.input);
};

module.exports = {
  emailTypesResolvers,
  getEmailTypeResolvers,
  createEmailTypeResolver,
};
