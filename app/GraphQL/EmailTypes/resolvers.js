const EmailTypesRepository = require('../../Repositories/EmailTypesRepository');

const emailTypesResolver = async () => {
  return await EmailTypesRepository.emailTypes();
};

const getEmailTypeResolver = async (id) => {
  return await EmailTypesRepository.getEmailType(id);
};

const createEmailTypeResolver = async (args) => {
  return await EmailTypesRepository.createEmailType(args.input);
};

module.exports = {
  emailTypesResolver,
  getEmailTypeResolver,
  createEmailTypeResolver,
};
