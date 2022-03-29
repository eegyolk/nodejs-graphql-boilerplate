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
const { getPaymentProvidersLoader } = require('./PaymentProviders/loaders');
const { getPersonasLoader } = require('./Personas/loaders');
const { getPhoneTypesLoader } = require('./PhoneTypes/loaders');
const { getPriceDurationsLoader } = require('./PriceDurations/loaders');
const { getPriceSchemesLoader } = require('./PriceSchemes/loaders');
const { getPropertyTypesLoader } = require('./PropertyTypes/loaders');
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
  paymentProviders: new DataLoader(getPaymentProvidersLoader),
  personas: new DataLoader(getPersonasLoader),
  phoneTypes: new DataLoader(getPhoneTypesLoader),
  priceDurations: new DataLoader(getPriceDurationsLoader),
  priceSchemes: new DataLoader(getPriceSchemesLoader),
  propertyTypes: new DataLoader(getPropertyTypesLoader),
  roles: new DataLoader(getRolesLoader),
  socialNetworks: new DataLoader(getSocialNetworksLoader),
  users: new DataLoader(getUsersLoader),
};

module.exports = loaders;
