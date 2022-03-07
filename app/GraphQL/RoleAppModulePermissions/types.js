const {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLInt,
  GraphQLBoolean,
} = require('graphql');

const { appModulesType } = require('../AppModules/types');
const { rolesType } = require('../Roles/types');

const roleAppModulePermissionsType = new GraphQLObjectType({
  name: 'RoleAppModulePermissions',
  fields: {
    id: { type: new GraphQLNonNull(GraphQLInt) },
    role_id: { type: new GraphQLNonNull(GraphQLInt) },
    role: {
      type: new GraphQLNonNull(rolesType),
      resolve: (source, args, { loaders }) =>
        loaders.roles.load(source.role_id),
    },
    app_module_id: { type: new GraphQLNonNull(GraphQLInt) },
    app_module: {
      type: new GraphQLNonNull(appModulesType),
      resolve: (source, args, { loaders }) =>
        loaders.appModules.load(source.app_module_id),
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
