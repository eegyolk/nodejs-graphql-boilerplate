const graphqlFields = require('graphql-fields');
const {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLInt,
  GraphQLBoolean,
} = require('graphql');
const BigInt = require('graphql-bigint');

const { appModulesType } = require('../AppModules/types');
const { rolesType } = require('../Roles/types');

const roleAppModulePermissionsType = new GraphQLObjectType({
  name: 'RoleAppModulePermissions',
  fields: {
    id: { type: new GraphQLNonNull(BigInt) },
    role_id: { type: new GraphQLNonNull(GraphQLInt) },
    role: {
      type: new GraphQLNonNull(rolesType),
      resolve: (source, args, { loaders }, info) => {
        const fields = Object.keys(graphqlFields(info));

        return loaders.roles.load(`${source.role_id}@${fields.join(',')}`);
      },
    },
    app_module_id: { type: new GraphQLNonNull(GraphQLInt) },
    app_module: {
      type: new GraphQLNonNull(appModulesType),
      resolve: (source, args, { loaders }, info) => {
        const fields = Object.keys(graphqlFields(info));

        return loaders.appModules.load(
          `${source.app_module_id}@${fields.join(',')}`
        );
      },
    },
    can_view: { type: new GraphQLNonNull(GraphQLBoolean) },
    can_create: { type: new GraphQLNonNull(GraphQLBoolean) },
    can_edit: { type: new GraphQLNonNull(GraphQLBoolean) },
    can_delete: { type: new GraphQLNonNull(GraphQLBoolean) },
    created_at: { type: new GraphQLNonNull(GraphQLString) },
    updated_at: { type: new GraphQLNonNull(GraphQLString) },
    deleted_at: { type: GraphQLString },
  },
});

module.exports = { roleAppModulePermissionsType };
