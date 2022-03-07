const DataLoader = require('dataloader');

const { getAddressTypesResolver } = require('./AddressTypes/resolvers');
const { getAppModulesResolver } = require('./AppModules/resolvers');
const { getDevicesResolver } = require('./Devices/resolvers');
const { getEmailTypesResolvers } = require('./EmailTypes/resolvers');
const { getRolesResolver } = require('./Roles/resolvers');
const { getUsersResolver } = require('./Users/resolvers');

const loaders = {
  addressTypes: new DataLoader((ids) => getAddressTypesResolver(ids)),
  appModules: new DataLoader((ids) => getAppModulesResolver(ids)),
  devices: new DataLoader((ids) => getDevicesResolver(ids)),
  emailTypes: new DataLoader((ids) => getEmailTypesResolvers(ids)),
  roles: new DataLoader((ids) => getRolesResolver(ids)),
  users: new DataLoader((ids) => getUsersResolver(ids)),
};

module.exports = loaders;
