const {
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLBoolean,
} = require('graphql');

const { subTypesEnumType } = require('./enumTypes');

const createPhoneTypeInputType = new GraphQLInputObjectType({
  name: 'CreatePhoneTypeInput',
  fields: {
    code: { type: new GraphQLNonNull(GraphQLString) },
    label: { type: new GraphQLNonNull(GraphQLString) },
    description: { type: new GraphQLNonNull(GraphQLString) },
    sub_type: {
      type: new GraphQLNonNull(subTypesEnumType),
    },
    is_default: { type: new GraphQLNonNull(GraphQLBoolean) },
  },
});

module.exports = { createPhoneTypeInputType };
