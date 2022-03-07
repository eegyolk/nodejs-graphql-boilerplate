const RolesRepository = require('../../Repositories/RolesRepository');

const getRolesLoader = async (ids) => {
  return await RolesRepository.getRoles(ids);
};

module.exports = {
  getRolesLoader,
};
