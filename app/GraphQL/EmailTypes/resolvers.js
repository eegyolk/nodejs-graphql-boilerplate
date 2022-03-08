const graphqlFields = require('graphql-fields');

const EmailTypesRepository = require('../../Repositories/EmailTypesRepository');

const emailTypesResolver = async (info) => {
  const fields = Object.keys(graphqlFields(info));

  return await EmailTypesRepository.emailTypes(fields.join(','));
};

const getEmailTypeResolver = async (id, info) => {
  const fields = Object.keys(graphqlFields(info));

  return await EmailTypesRepository.getEmailType(id, fields.join(','));
};

const createEmailTypeResolver = async (args) => {
  return await EmailTypesRepository.createEmailType(args.input);
};

module.exports = {
  emailTypesResolver,
  getEmailTypeResolver,
  createEmailTypeResolver,
};
