const {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLInt,
  GraphQLBoolean,
  GraphQLEnumType,
} = require('graphql');

const phoneTypesType = new GraphQLObjectType({
  name: 'PhoneTypes',
  fields: {
    id: { type: new GraphQLNonNull(GraphQLInt) },
    code: { type: new GraphQLNonNull(GraphQLString) },
    label: { type: new GraphQLNonNull(GraphQLString) },
    description: { type: new GraphQLNonNull(GraphQLString) },
    sub_type: {
      type: new GraphQLNonNull(
        new GraphQLEnumType({
          name: 'SUB_TYPE_ENUM',
          values: {
            MOBILE: { value: 'MOBILE' },
            LANDLINE: { value: 'LANDLINE' },
          },
        })
      ),
    },
    is_default: { type: new GraphQLNonNull(GraphQLBoolean) },
    created_at: { type: new GraphQLNonNull(GraphQLString) },
    updated_at: { type: new GraphQLNonNull(GraphQLString) },
    deleted_at: { type: GraphQLString },
  },
});

module.exports = { phoneTypesType };
