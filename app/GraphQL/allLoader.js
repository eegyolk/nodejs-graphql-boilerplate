const DataLoader = require('dataloader');

const { getDevicesResolver } = require('./Devices/resolvers');
const { getUsersResolver } = require('./Users/resolvers');

const loaders = {
  devices: new DataLoader((ids) => getDevicesResolver(ids)),
  users: new DataLoader((ids) => getUsersResolver(ids)),
};

module.exports = loaders;
