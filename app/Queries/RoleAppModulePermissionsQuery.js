const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLBoolean,
  GraphQLEnumType,
} = require('graphql');

class RoleAppModulePermissionsQuery {
  static query() {
    return new GraphQLObjectType({
      name: 'RoleAppModulePermissions',
      fields: {
        id: { type: GraphQLInt },
        role_id: { type: GraphQLInt },
        app_module_id: { type: GraphQLInt },
        can_view: { type: GraphQLBoolean },
        can_create: { type: GraphQLBoolean },
        can_edit: { type: GraphQLBoolean },
        can_delete: { type: GraphQLBoolean },
        created_at: { type: GraphQLString },
        updated_at: { type: GraphQLString },
        deleted_at: { type: GraphQLString },
      },
    });
  }
}

module.exports = RoleAppModulePermissionsQuery;
