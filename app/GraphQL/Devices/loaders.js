const DataLoader = require('dataloader');

const DevicesRepository = require('../../Repositories/DevicesRepository');
const Utilities = require('../../Classes/Utilities');

const getDevicesLoader = async (idsAndFields) => {
  const { ids, fields } = Utilities.extractIdsAndFields(idsAndFields);

  return await DevicesRepository.getDevices(ids, fields);
};

module.exports = {
  devices: new DataLoader(getDevicesLoader),
};
