const DataLoader = require('dataloader');

const { getAppModulesResolver } = require('./AppModules/resolvers');
const { getDevicesResolver } = require('./Devices/resolvers');
const { getRolesResolver } = require('./Roles/resolvers');
const { getUsersResolver } = require('./Users/resolvers');

const loaders = {
  appModules: new DataLoader((ids) => getAppModulesResolver(ids)),
  devices: new DataLoader((ids) => getDevicesResolver(ids)),
  roles: new DataLoader((ids) => getRolesResolver(ids)),
  users: new DataLoader((ids) => getUsersResolver(ids)),
};

module.exports = loaders;
