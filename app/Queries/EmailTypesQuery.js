const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLBoolean,
} = require('graphql');

class EmailTypesQuery {
  static query() {
    return new GraphQLObjectType({
      name: 'EmailTypes',
      fields: {
        id: { type: GraphQLInt },
        code: { type: GraphQLString },
        label: { type: GraphQLString },
        description: { type: GraphQLString },
        is_default: { type: GraphQLBoolean },
        created_at: { type: GraphQLString },
        updated_at: { type: GraphQLString },
        deleted_at: { type: GraphQLString },
      },
    });
  }
}

module.exports = EmailTypesQuery;
