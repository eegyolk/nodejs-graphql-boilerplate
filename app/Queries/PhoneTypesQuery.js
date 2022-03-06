const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLBoolean,
  GraphQLEnumType,
} = require('graphql');

class PhoneTypesQuery {
  static query() {
    return new GraphQLObjectType({
      name: 'PhoneTypes',
      fields: {
        id: { type: GraphQLInt },
        code: { type: GraphQLString },
        label: { type: GraphQLString },
        description: { type: GraphQLString },
        sub_type: { type: subTypeEnum.call(this) },
        is_default: { type: GraphQLBoolean },
        created_at: { type: GraphQLString },
        updated_at: { type: GraphQLString },
        deleted_at: { type: GraphQLString },
      },
    });
  }
}

function subTypeEnum() {
  return new GraphQLEnumType({
    name: 'SUB_TYPE_ENUM',
    values: {
      MOBILE: { value: 'MOBILE' },
      LANDLINE: { value: 'LANDLINE' },
    },
  });
}

module.exports = PhoneTypesQuery;
