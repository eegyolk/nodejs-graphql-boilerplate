const DataLoader = require('dataloader');

const { getAddressTypesResolver } = require('./AddressTypes/resolvers');
const { getAppModulesResolver } = require('./AppModules/resolvers');
const { getDevicesResolver } = require('./Devices/resolvers');
const { getEmailTypesResolvers } = require('./EmailTypes/resolvers');
const { getPersonasResolver } = require('./Personas/resolvers');
const { getPhoneTypesResolver } = require('./PhoneTypes/resolvers');
const { getRolesResolver } = require('./Roles/resolvers');
const { getUsersResolver } = require('./Users/resolvers');

const loaders = {
  addressTypes: new DataLoader((ids) => getAddressTypesResolver(ids)),
  appModules: new DataLoader((ids) => getAppModulesResolver(ids)),
  devices: new DataLoader((ids) => getDevicesResolver(ids)),
  emailTypes: new DataLoader((ids) => getEmailTypesResolvers(ids)),
  personas: new DataLoader((ids) => getPersonasResolver(ids)),
  phoneTypes: new DataLoader((ids) => getPhoneTypesResolver(ids)),
  roles: new DataLoader((ids) => getRolesResolver(ids)),
  users: new DataLoader((ids) => getUsersResolver(ids)),
};

module.exports = loaders;
