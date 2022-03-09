const graphqlFields = require('graphql-fields');
const {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLInt,
} = require('graphql');

const { rolesType } = require('../Roles/types');
const usersExcludedFields = require('../Users/excludedFields');
const { usersType } = require('../Users/types');

const userRolesType = new GraphQLObjectType({
  name: 'UserRoles',
  fields: {
    id: { type: new GraphQLNonNull(GraphQLInt) },
    user_id: { type: new GraphQLNonNull(GraphQLInt) },
    user: {
      type: new GraphQLNonNull(usersType),
      resolve: (source, args, { loaders }, info) => {
        const fields = Object.keys(
          graphqlFields(info, {}, { excludedFields: usersExcludedFields })
        );

        return loaders.users.load(`${source.user_id}@${fields.join(',')}`);
      },
    },
    role_id: { type: new GraphQLNonNull(GraphQLInt) },
    role: {
      type: new GraphQLNonNull(rolesType),
      resolve: (source, args, { loaders }, info) => {
        const fields = Object.keys(graphqlFields(info));

        return loaders.roles.load(`${source.role_id}@${fields.join(',')}`);
      },
    },
    created_at: { type: new GraphQLNonNull(GraphQLString) },
    updated_at: { type: new GraphQLNonNull(GraphQLString) },
    deleted_at: { type: GraphQLString },
  },
});

module.exports = { userRolesType };
