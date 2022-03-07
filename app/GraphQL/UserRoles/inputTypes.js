const {
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLInt,
} = require('graphql');

const createUserRoleInputType = new GraphQLInputObjectType({
  name: 'CreateUserRoleInput',
  fields: {
    user_id: { type: new GraphQLNonNull(GraphQLInt) },
    role_id: { type: new GraphQLNonNull(GraphQLInt) },
  },
});

module.exports = { createUserRoleInputType };
