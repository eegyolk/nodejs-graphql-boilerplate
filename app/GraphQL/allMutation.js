const { GraphQLObjectType } = require('graphql');
const {
  personaIdentificationTypes,
} = require('../Repositories/PersonaIdentificationTypesRepository');

const { createActivityLogInputType } = require('./ActivityLogs/inputTypes'),
  { createActivityLogResolver } = require('./ActivityLogs/resolvers'),
  { activityLogsType } = require('./ActivityLogs/types');

const { createAddressTypeInputType } = require('./AddressTypes/inputTypes'),
  { createAddressTypeResolver } = require('./AddressTypes/resolvers'),
  { addressTypesType } = require('./AddressTypes/types');

const { createAmenityInputType } = require('./Amenities/inputTypes'),
  { createAmenityResolver } = require('./Amenities/resolvers'),
  { amenitiesType } = require('./Amenities/types');

const { createAppModuleInputType } = require('./AppModules/inputTypes'),
  { createAppModuleResolver } = require('./AppModules/resolvers'),
  { appModulesType } = require('./AppModules/types');

const { createDeviceInputType } = require('./Devices/inputTypes'),
  { createDeviceResolver } = require('./Devices/resolvers'),
  { devicesType } = require('./Devices/types');

const { createEmailTypeInputType } = require('./EmailTypes/inputTypes'),
  { createEmailTypeResolver } = require('./EmailTypes/resolvers'),
  { emailTypesType } = require('./EmailTypes/types');

const { createFeatureInputType } = require('./Features/inputTypes'),
  { createFeatureResolver } = require('./Features/resolvers'),
  { featuresType } = require('./Features/types');

const { createHouseRuleInputType } = require('./HouseRules/inputTypes'),
  { createHouseRuleResolver } = require('./HouseRules/resolvers'),
  { houseRulesType } = require('./HouseRules/types');

const {
    createIdentificationTypeInputType,
  } = require('./IdentificationTypes/inputTypes'),
  {
    createIdentificationTypeResolver,
  } = require('./IdentificationTypes/resolvers'),
  { identificationTypesType } = require('./IdentificationTypes/types');

const { createLeaseDurationInputType } = require('./LeaseDurations/inputTypes'),
  { createLeaseDurationResolver } = require('./LeaseDurations/resolvers'),
  { leaseDurationsType } = require('./LeaseDurations/types');

const {
    createPaymentProviderInputType,
  } = require('./PaymentProviders/inputTypes'),
  { createPaymentProviderResolver } = require('./PaymentProviders/resolvers'),
  { paymentProvidersType } = require('./PaymentProviders/types');

const {
    createPersonaIdentificationTypeInputType,
  } = require('./PersonaIdentificationTypes/inputTypes'),
  {
    createPersonaIdentificationTypeResolver,
  } = require('./PersonaIdentificationTypes/resolvers'),
  {
    personaIdentificationTypesType,
  } = require('./PersonaIdentificationTypes/types');

const { createPersonaInputType } = require('./Personas/inputTypes'),
  { createPersonaResolver } = require('./Personas/resolvers'),
  { personasType } = require('./Personas/types');

const { createPhoneTypeInputType } = require('./PhoneTypes/inputTypes'),
  { createPhoneTypeResolver } = require('./PhoneTypes/resolvers'),
  { phoneTypesType } = require('./PhoneTypes/types');

const { createPriceDurationInputType } = require('./PriceDurations/inputTypes'),
  { createPriceDurationResolver } = require('./PriceDurations/resolvers'),
  { priceDurationsType } = require('./PriceDurations/types');

const { createPriceSchemeInputType } = require('./PriceSchemes/inputTypes'),
  { createPriceSchemeResolver } = require('./PriceSchemes/resolvers'),
  { priceSchemesType } = require('./PriceSchemes/types');

const { createPropertyTypeInputType } = require('./PropertyTypes/inputTypes'),
  { createPropertyTypeResolver } = require('./PropertyTypes/resolvers'),
  { propertyTypesType } = require('./PropertyTypes/types');

const {
    createRoleAppModulePermissionInputType,
  } = require('./RoleAppModulePermissions/inputTypes'),
  {
    createRoleAppModulePermissionResolver,
  } = require('./RoleAppModulePermissions/resolvers'),
  {
    roleAppModulePermissionsType,
  } = require('./RoleAppModulePermissions/types');

const { createRoleInputType } = require('./Roles/inputTypes'),
  { createRoleResolver } = require('./Roles/resolvers'),
  { rolesType } = require('./Roles/types');

const { createSocialNetworkInputType } = require('./SocialNetworks/inputTypes'),
  { createSocialNetworkResolver } = require('./SocialNetworks/resolvers'),
  { socialNetworksType } = require('./SocialNetworks/types');

const { createUnitTypeInputType } = require('./UnitTypes/inputTypes'),
  { createUnitTypeResolver } = require('./UnitTypes/resolvers'),
  { unitTypesType } = require('./UnitTypes/types');

const { createUserAddressInputType } = require('./UserAddresses/inputTypes'),
  { createUserAddressResolver } = require('./UserAddresses/resolvers'),
  { userAddressesType } = require('./UserAddresses/types');

const { createUserEmailInputType } = require('./UserEmails/inputTypes'),
  { createUserEmailResolver } = require('./UserEmails/resolvers'),
  { userEmailsType } = require('./UserEmails/types');

const {
    createUserIdentificationInputType,
  } = require('./UserIdentifications/inputTypes'),
  {
    createUserIdentificationResolver,
  } = require('./UserIdentifications/resolvers'),
  { userIdentificationsType } = require('./UserIdentifications/types');

const { createUserPersonaInputType } = require('./UserPersonas/inputTypes'),
  { createUserPersonaResolver } = require('./UserPersonas/resolvers'),
  { userPersonasType } = require('./UserPersonas/types');

const { createUserPhoneInputType } = require('./UserPhones/inputTypes'),
  { createUserPhoneResolver } = require('./UserPhones/resolvers'),
  { userPhonesType } = require('./UserPhones/types');

const { createUserRoleInputType } = require('./UserRoles/inputTypes'),
  { createUserRoleResolver } = require('./UserRoles/resolvers'),
  { userRolesType } = require('./UserRoles/types');

const { createUserInputType } = require('./Users/inputTypes'),
  { createUserResolver } = require('./Users/resolvers'),
  { usersType } = require('./Users/types');

const {
    createUserSocialNetworkInputType,
  } = require('./UserSocialNetworks/inputTypes'),
  {
    createUserSocialNetworkResolver,
  } = require('./UserSocialNetworks/resolvers'),
  { userSocialNetworksType } = require('./UserSocialNetworks/types');

const { createUtilityInputType } = require('./Utilities/inputTypes'),
  { createUtilityResolver } = require('./Utilities/resolvers'),
  { utilitiesType } = require('./Utilities/types');

const mutations = new GraphQLObjectType({
  name: 'Mutations',
  fields: {
    createActivityLog: {
      type: activityLogsType,
      args: {
        input: { type: createActivityLogInputType },
      },
      resolve: async (source, args) => await createActivityLogResolver(args),
    },

    createAddressType: {
      type: addressTypesType,
      args: {
        input: { type: createAddressTypeInputType },
      },
      resolve: async (source, args) => await createAddressTypeResolver(args),
    },

    createAmenity: {
      type: amenitiesType,
      args: {
        input: { type: createAmenityInputType },
      },
      resolve: async (source, args) => await createAmenityResolver(args),
    },

    createAppModule: {
      type: appModulesType,
      args: {
        input: { type: createAppModuleInputType },
      },
      resolve: async (source, args) => await createAppModuleResolver(args),
    },

    createDevice: {
      type: devicesType,
      args: {
        input: { type: createDeviceInputType },
      },
      resolve: async (source, args) => await createDeviceResolver(args),
    },

    createEmailType: {
      type: emailTypesType,
      args: {
        input: { type: createEmailTypeInputType },
      },
      resolve: async (source, args) => await createEmailTypeResolver(args),
    },

    createFeature: {
      type: featuresType,
      args: {
        input: { type: createFeatureInputType },
      },
      resolve: async (source, args) => await createFeatureResolver(args),
    },

    createHouseRule: {
      type: houseRulesType,
      args: {
        input: { type: createHouseRuleInputType },
      },
      resolve: async (source, args) => await createHouseRuleResolver(args),
    },

    createIdentificationType: {
      type: identificationTypesType,
      args: {
        input: { type: createIdentificationTypeInputType },
      },
      resolve: async (source, args) =>
        await createIdentificationTypeResolver(args),
    },

    createLeaseDuration: {
      type: leaseDurationsType,
      args: {
        input: { type: createLeaseDurationInputType },
      },
      resolve: async (source, args) => await createLeaseDurationResolver(args),
    },

    createPaymentProvider: {
      type: paymentProvidersType,
      args: {
        input: { type: createPaymentProviderInputType },
      },
      resolve: async (source, args) =>
        await createPaymentProviderResolver(args),
    },

    createPersonaIdentificationType: {
      type: personaIdentificationTypesType,
      args: {
        input: { type: createPersonaIdentificationTypeInputType },
      },
      resolve: async (source, args) =>
        await createPersonaIdentificationTypeResolver(args),
    },

    createPersona: {
      type: personasType,
      args: {
        input: { type: createPersonaInputType },
      },
      resolve: async (source, args) => await createPersonaResolver(args),
    },

    createPhoneType: {
      type: phoneTypesType,
      args: {
        input: { type: createPhoneTypeInputType },
      },
      resolve: async (source, args) => await createPhoneTypeResolver(args),
    },

    createPriceDuration: {
      type: priceDurationsType,
      args: {
        input: { type: createPriceDurationInputType },
      },
      resolve: async (source, args) => await createPriceDurationResolver(args),
    },

    createPriceScheme: {
      type: priceSchemesType,
      args: {
        input: { type: createPriceSchemeInputType },
      },
      resolve: async (source, args) => await createPriceSchemeResolver(args),
    },

    createPropertyType: {
      type: propertyTypesType,
      args: {
        input: { type: createPropertyTypeInputType },
      },
      resolve: async (source, args) => await createPropertyTypeResolver(args),
    },

    createRoleAppModulePermission: {
      type: roleAppModulePermissionsType,
      args: {
        input: { type: createRoleAppModulePermissionInputType },
      },
      resolve: async (source, args) =>
        await createRoleAppModulePermissionResolver(args),
    },

    createRole: {
      type: rolesType,
      args: {
        input: { type: createRoleInputType },
      },
      resolve: async (source, args) => await createRoleResolver(args),
    },

    createSocialNetwork: {
      type: socialNetworksType,
      args: {
        input: { type: createSocialNetworkInputType },
      },
      resolve: async (source, args) => await createSocialNetworkResolver(args),
    },

    createUnitType: {
      type: unitTypesType,
      args: {
        input: { type: createUnitTypeInputType },
      },
      resolve: async (source, args) => await createUnitTypeResolver(args),
    },

    createUserAddress: {
      type: userAddressesType,
      args: {
        input: { type: createUserAddressInputType },
      },
      resolve: async (source, args) => await createUserAddressResolver(args),
    },

    createUserEmail: {
      type: userEmailsType,
      args: {
        input: { type: createUserEmailInputType },
      },
      resolve: async (source, args) => await createUserEmailResolver(args),
    },

    createUserIdentification: {
      type: userIdentificationsType,
      args: {
        input: { type: createUserIdentificationInputType },
      },
      resolve: async (source, args) =>
        await createUserIdentificationResolver(args),
    },

    createUserPersona: {
      type: userPersonasType,
      args: {
        input: { type: createUserPersonaInputType },
      },
      resolve: async (source, args) => await createUserPersonaResolver(args),
    },

    createUserPhone: {
      type: userPhonesType,
      args: {
        input: { type: createUserPhoneInputType },
      },
      resolve: async (source, args) => await createUserPhoneResolver(args),
    },

    createUserRole: {
      type: userRolesType,
      args: {
        input: { type: createUserRoleInputType },
      },
      resolve: async (source, args) => await createUserRoleResolver(args),
    },

    createUser: {
      type: usersType,
      args: {
        input: { type: createUserInputType },
      },
      resolve: async (source, args) => await createUserResolver(args),
    },

    createUserSocialNetwork: {
      type: userSocialNetworksType,
      args: {
        input: { type: createUserSocialNetworkInputType },
      },
      resolve: async (source, args) =>
        await createUserSocialNetworkResolver(args),
    },

    createUtility: {
      type: utilitiesType,
      args: {
        input: { type: createUtilityInputType },
      },
      resolve: async (source, args) => await createUtilityResolver(args),
    },
  },
});

module.exports = mutations;
