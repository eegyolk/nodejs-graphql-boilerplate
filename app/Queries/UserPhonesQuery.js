const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLBoolean,
} = require('graphql');

class UserPhonesQuery {
  static query() {
    return new GraphQLObjectType({
      name: 'UserPhones',
      fields: {
        id: { type: GraphQLInt },
        user_id: { type: GraphQLInt },
        phone_type_id: { type: GraphQLInt },
        number: { type: GraphQLString },
        is_default: { type: GraphQLBoolean },
        rank: { type: GraphQLInt },
        created_at: { type: GraphQLString },
        updated_at: { type: GraphQLString },
        deleted_at: { type: GraphQLString },
      },
    });
  }
}

module.exports = UserPhonesQuery;
