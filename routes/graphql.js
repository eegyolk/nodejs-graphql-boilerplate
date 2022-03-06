const { graphqlHTTP } = require('express-graphql');
const { GraphQLSchema, GraphQLObjectType } = require('graphql');

const ActivityLogsQuery = require('../app/Queries/ActivityLogsQuery');
const AddressTypesQuery = require('../app/Queries/AddressTypesQuery');
const AppModulesQuery = require('../app/Queries/AppModulesQuery');
const DevicesQuery = require('../app/Queries/DevicesQuery');
const EmailTypesQuery = require('../app/Queries/EmailTypesQuery');
const PersonasQuery = require('../app/Queries/PersonasQuery');
const PhoneTypesQuery = require('../app/Queries/PhoneTypesQuery');
const RoleAppModulePermissionsQuery = require('../app/Queries/RoleAppModulePermissionsQuery');
const RolesQuery = require('../app/Queries/RolesQuery');
const SocialNetworksQuery = require('../app/Queries/SocialNetworksQuery');
const UserAddressesQuery = require('../app/Queries/UserAddressesQuery');
const UserEmailsQuery = require('../app/Queries/UserEmailsQuery');
const UserPersonasQuery = require('../app/Queries/UserPersonasQuery');
const UserPhonesQuery = require('../app/Queries/UserPhonesQuery');
const UserRolesQuery = require('../app/Queries/UserRolesQuery');
const UserSocialNetworksQuery = require('../app/Queries/UserSocialNetworksQuery');
const UsersQuery = require('../app/Queries/UsersQuery');

const ActivityLogsMutator = require('../app/Mutations/ActivityLogsMutator');
const AddressTypesMutator = require('../app/Mutations/AddressTypesMutator');

const Query = new GraphQLObjectType({
  name: 'Query',
  fields: {
    activityLogs: { type: ActivityLogsQuery.query() },
    addressTypes: { type: AddressTypesQuery.query() },
    appModules: { type: AppModulesQuery.query() },
    devices: { type: DevicesQuery.query() },
    emailTypes: { type: EmailTypesQuery.query() },
    personas: { type: PersonasQuery.query() },
    phoneTypes: { type: PhoneTypesQuery.query() },
    roleAppModulePermissions: { type: RoleAppModulePermissionsQuery.query() },
    roles: { type: RolesQuery.query() },
    socialNetworks: { type: SocialNetworksQuery.query() },
    userAddresses: { type: UserAddressesQuery.query() },
    userEmails: { type: UserEmailsQuery.query() },
    userPersonas: { type: UserPersonasQuery.query() },
    userPhones: { type: UserPhonesQuery.query() },
    userRoles: { type: UserRolesQuery.query() },
    userSocialNetworks: { type: UserSocialNetworksQuery.query() },
    users: { type: UsersQuery.query() },
  },
});

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    createActivityLogs: { type: ActivityLogsMutator.createActivityLogs() },
    createAddressTypes: { type: AddressTypesMutator.createAddressTypes() },
    updateAddressTypes: { type: AddressTypesMutator.updateAddressTypes() },
    deleteAddressTypes: { type: AddressTypesMutator.deleteAddressTypes() },
  },
});

const schema = new GraphQLSchema({
  query: Query,
  mutation: Mutation,
});

module.exports = graphqlHTTP({
  schema: schema,
  graphiql: true,
});
