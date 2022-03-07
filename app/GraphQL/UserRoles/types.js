const {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLInt,
} = require('graphql');

const { rolesType } = require('../Roles/types');
const { usersType } = require('../Users/types');

const userRolesType = new GraphQLObjectType({
  name: 'UserRoles',
  fields: {
    id: { type: new GraphQLNonNull(GraphQLInt) },
    user_id: { type: new GraphQLNonNull(GraphQLInt) },
    user: {
      type: new GraphQLNonNull(usersType),
      resolve: (source, args, { loaders }) =>
        loaders.users.load(source.user_id),
    },
    role_id: { type: new GraphQLNonNull(GraphQLInt) },
    roles: {
      type: new GraphQLNonNull(rolesType),
      resolve: (source, args, { loaders }) =>
        loaders.roles.load(source.role_id),
    },
    created_at: { type: new GraphQLNonNull(GraphQLString) },
    updated_at: { type: new GraphQLNonNull(GraphQLString) },
    deleted_at: { type: GraphQLString },
  },
});

module.exports = { userRolesType };
