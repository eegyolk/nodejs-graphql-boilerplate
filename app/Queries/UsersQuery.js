const { GraphQLObjectType, GraphQLString, GraphQLInt } = require('graphql');

class UsersQuery {
  static query() {
    return new GraphQLObjectType({
      name: 'Users',
      fields: {
        id: { type: GraphQLInt },
        name: { type: GraphQLString },
        email_address: { type: GraphQLString },
        username: { type: GraphQLString },
        password: { type: GraphQLString },
        image_url: { type: GraphQLString },
        remember_token: { type: GraphQLString },
        verification_token: { type: GraphQLString },
        recovery_token: { type: GraphQLString },
        created_at: { type: GraphQLString },
        updated_at: { type: GraphQLString },
        deleted_at: { type: GraphQLString },
      },
    });
  }
}

module.exports = UsersQuery;
