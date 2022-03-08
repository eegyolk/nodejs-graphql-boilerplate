const DevicesRepository = require('../../Repositories/DevicesRepository');
const Utilities = require('../../Classes/Utilities');

const getDevicesLoader = async (idsAndFields) => {
  const { ids, fields } = Utilities.extractIdsAndFields(idsAndFields);

  return await DevicesRepository.getDevices(ids, fields);
};

module.exports = {
  getDevicesLoader,
};
