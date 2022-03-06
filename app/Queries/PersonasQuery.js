const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLBoolean,
} = require('graphql');

class PersonasQuery {
  static query() {
    return new GraphQLObjectType({
      name: 'Personas',
      fields: {
        id: { type: GraphQLInt },
        code: { type: GraphQLString },
        label: { type: GraphQLString },
        description: { type: GraphQLString },
        is_active: { type: GraphQLBoolean },
        created_at: { type: GraphQLString },
        updated_at: { type: GraphQLString },
        deleted_at: { type: GraphQLString },
      },
    });
  }
}

module.exports = PersonasQuery;
