const DataLoader = require('dataloader');

const { getAddressTypesLoader } = require('./AddressTypes/loaders');
const { getAppModulesLoader } = require('./AppModules/loaders');
const { getDevicesLoader } = require('./Devices/loaders');
const { getEmailTypesLoader } = require('./EmailTypes/loaders');
const { getPersonasLoader } = require('./Personas/loaders');
const { getPhoneTypesLoader } = require('./PhoneTypes/loaders');
const { getRolesLoader } = require('./Roles/loaders');
const { getSocialNetworksLoader } = require('./SocialNetworks/loaders');
const { getUsersLoader } = require('./Users/loaders');

const loaders = {
  addressTypes: new DataLoader((ids) => getAddressTypesLoader(ids)),
  appModules: new DataLoader((ids) => getAppModulesLoader(ids)),
  devices: new DataLoader((ids) => getDevicesLoader(ids)),
  emailTypes: new DataLoader((ids) => getEmailTypesLoader(ids)),
  personas: new DataLoader((ids) => getPersonasLoader(ids)),
  phoneTypes: new DataLoader((ids) => getPhoneTypesLoader(ids)),
  roles: new DataLoader((ids) => getRolesLoader(ids)),
  socialNetworks: new DataLoader((ids) => getSocialNetworksLoader(ids)),
  users: new DataLoader((ids) => getUsersLoader(ids)),
};

module.exports = loaders;
