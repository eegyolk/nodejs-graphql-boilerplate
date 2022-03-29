const DataLoader = require('dataloader');

const { getAddressTypesLoader } = require('./AddressTypes/loaders');
const { getAmenitiesLoader } = require('./Amenities/loaders');
const { getAppModulesLoader } = require('./AppModules/loaders');
const { getDevicesLoader } = require('./Devices/loaders');
const { getEmailTypesLoader } = require('./EmailTypes/loaders');
const { getFeaturesLoader } = require('./Features/loaders');
const { getHouseRulesLoader } = require('./HouseRules/loaders');
const {
  getIdentificationTypesLoader,
} = require('./IdentificationTypes/loaders');
const { getLeaseDurationsLoader } = require('./LeaseDurations/loaders');
const { getPersonasLoader } = require('./Personas/loaders');
const { getPhoneTypesLoader } = require('./PhoneTypes/loaders');
const { getRolesLoader } = require('./Roles/loaders');
const { getSocialNetworksLoader } = require('./SocialNetworks/loaders');
const { getUsersLoader } = require('./Users/loaders');

const loaders = {
  addressTypes: new DataLoader(getAddressTypesLoader),
  amenities: new DataLoader(getAmenitiesLoader),
  appModules: new DataLoader(getAppModulesLoader),
  devices: new DataLoader(getDevicesLoader),
  emailTypes: new DataLoader(getEmailTypesLoader),
  features: new DataLoader(getFeaturesLoader),
  houseRules: new DataLoader(getHouseRulesLoader),
  identificationTypes: new DataLoader(getIdentificationTypesLoader),
  leaseDurations: new DataLoader(getLeaseDurationsLoader),
  personas: new DataLoader(getPersonasLoader),
  phoneTypes: new DataLoader(getPhoneTypesLoader),
  roles: new DataLoader(getRolesLoader),
  socialNetworks: new DataLoader(getSocialNetworksLoader),
  users: new DataLoader(getUsersLoader),
};

module.exports = loaders;
