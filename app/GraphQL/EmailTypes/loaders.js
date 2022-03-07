const EmailTypesRepository = require('../../Repositories/EmailTypesRepository');

const getEmailTypesLoader = async (ids) => {
  return await EmailTypesRepository.getEmailTypes(ids);
};

module.exports = {
  getEmailTypesLoader,
};
