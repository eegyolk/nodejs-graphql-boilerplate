const RolesRepository = require('../../Repositories/RolesRepository');
const Utilities = require('../../Classes/Utilities');

const getRolesLoader = async (idsAndFields) => {
  const { ids, fields } = Utilities.extractIdsAndFields(idsAndFields);

  return await RolesRepository.getRoles(ids, fields);
};

module.exports = {
  getRolesLoader,
};
