const EmailTypesRepository = require('../../Repositories/EmailTypesRepository');

const getEmailTypesResolvers = async () => {
  const result = await EmailTypesRepository.getEmailTypes();

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

module.exports = {
  getEmailTypesResolvers,
  getEmailTypeResolvers,
};
