const { GraphQLObjectType, GraphQLString, GraphQLInt } = require('graphql');

class UserRolesQuery {
  static query() {
    return new GraphQLObjectType({
      name: 'UserRoles',
      fields: {
        id: { type: GraphQLInt },
        user_id: { type: GraphQLInt },
        role_id: { type: GraphQLInt },
        created_at: { type: GraphQLString },
        updated_at: { type: GraphQLString },
        deleted_at: { type: GraphQLString },
      },
    });
  }
}

module.exports = UserRolesQuery;
