const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLBoolean,
} = require('graphql');

class UserSocialNetworksQuery {
  static query() {
    return new GraphQLObjectType({
      name: 'UserSocialNetworks',
      fields: {
        id: { type: GraphQLInt },
        user_id: { type: GraphQLInt },
        social_network_id: { type: GraphQLInt },
        url: { type: GraphQLString },
        is_default: { type: GraphQLBoolean },
        rank: { type: GraphQLInt },
        created_at: { type: GraphQLString },
        updated_at: { type: GraphQLString },
        deleted_at: { type: GraphQLString },
      },
    });
  }
}

module.exports = UserSocialNetworksQuery;
