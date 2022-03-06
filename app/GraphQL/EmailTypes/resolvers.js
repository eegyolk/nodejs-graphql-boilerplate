const EmailTypesRepository = require('../../Repositories/EmailTypesRepository');

const getEmailTypesResolvers = async () => {
  return await EmailTypesRepository.getEmailTypes();
};

const getEmailTypeResolvers = async (id) => {
  return await EmailTypesRepository.getEmailType(id);
};

module.exports = {
  getEmailTypesResolvers,
  getEmailTypeResolvers,
};
