const EmailTypesRepository = require('../../Repositories/EmailTypesRepository');

const getEmailTypes = async () => {
  return await EmailTypesRepository.getEmailTypes();
};

module.exports = {
  getEmailTypes,
};
