const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLBoolean,
} = require('graphql');

class UserPersonasQuery {
  static query() {
    return new GraphQLObjectType({
      name: 'UserPersonas',
      fields: {
        id: { type: GraphQLInt },
        user_id: { type: GraphQLInt },
        persona_id: { type: GraphQLInt },
        is_default: { type: GraphQLBoolean },
        created_at: { type: GraphQLString },
        updated_at: { type: GraphQLString },
        deleted_at: { type: GraphQLString },
      },
    });
  }
}

module.exports = UserPersonasQuery;
