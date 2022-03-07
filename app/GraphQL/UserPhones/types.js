const {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLInt,
  GraphQLBoolean,
} = require('graphql');

const { phoneTypesType } = require('../PhoneTypes/types');
const { usersType } = require('../Users/types');

const userPhonesType = new GraphQLObjectType({
  name: 'UserPhones',
  fields: {
    id: { type: new GraphQLNonNull(GraphQLInt) },
    user_id: { type: new GraphQLNonNull(GraphQLInt) },
    user: {
      type: new GraphQLNonNull(usersType),
      resolve: (source, args, { loaders }) =>
        loaders.users.load(source.user_id),
    },
    phone_type_id: { type: new GraphQLNonNull(GraphQLInt) },
    phone_type: {
      type: new GraphQLNonNull(phoneTypesType),
      resolve: (source, args, { loaders }) =>
        loaders.phoneTypes.load(source.phone_type_id),
    },
    number: { type: new GraphQLNonNull(GraphQLString) },
    is_default: { type: new GraphQLNonNull(GraphQLBoolean) },
    rank: { type: new GraphQLNonNull(GraphQLInt) },
    created_at: { type: new GraphQLNonNull(GraphQLString) },
    updated_at: { type: new GraphQLNonNull(GraphQLString) },
    deleted_at: { type: GraphQLString },
  },
});

module.exports = { userPhonesType };
