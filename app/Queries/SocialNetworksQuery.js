const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLBoolean,
} = require('graphql');

class SocialNetworksQuery {
  static query() {
    return new GraphQLObjectType({
      name: 'SocialNetworks',
      fields: {
        id: { type: GraphQLInt },
        code: { type: GraphQLString },
        label: { type: GraphQLString },
        description: { type: GraphQLString },
        is_default: { type: GraphQLBoolean },
        logo_url: { type: GraphQLString },
        created_at: { type: GraphQLString },
        updated_at: { type: GraphQLString },
        deleted_at: { type: GraphQLString },
      },
    });
  }
}

module.exports = SocialNetworksQuery;
