const HouseRulesRepository = require('../../Repositories/HouseRulesRepository');
const Utilities = require('../../Classes/Utilities');

const getHouseRulesLoader = async (idsAndFields) => {
  const { ids, fields } = Utilities.extractIdsAndFields(idsAndFields);

  return await HouseRulesRepository.getHouseRules(ids, fields);
};

module.exports = {
  getHouseRulesLoader,
};
