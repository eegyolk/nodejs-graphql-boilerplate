const {
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLInt,
  GraphQLBoolean,
} = require('graphql');

const createRoleAppModulePermissionInputType = new GraphQLInputObjectType({
  name: 'CreateRoleAppModulePermissionInput',
  fields: {
    role_id: { type: new GraphQLNonNull(GraphQLInt) },
    app_module_id: { type: new GraphQLNonNull(GraphQLInt) },
    can_view: { type: new GraphQLNonNull(GraphQLBoolean) },
    can_create: { type: new GraphQLNonNull(GraphQLBoolean) },
    can_edit: { type: new GraphQLNonNull(GraphQLBoolean) },
    can_delete: { type: new GraphQLNonNull(GraphQLBoolean) },
  },
});

module.exports = { createRoleAppModulePermissionInputType };
