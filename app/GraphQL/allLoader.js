const DataLoader = require('dataloader');

const { getDeviceResolver } = require('./Devices/resolvers');
const { getUserResolver } = require('./Users/resolvers');

const loaders = {
  devices: new DataLoader((ids) => getDeviceResolver(ids)),
  users: new DataLoader((ids) => getUserResolver(ids)),
};

module.exports = loaders;
