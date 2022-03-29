const graphqlFields = require('graphql-fields');
const {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLInt,
  GraphQLBoolean,
} = require('graphql');
const BigInt = require('graphql-bigint');

const { addressTypesType } = require('../AddressTypes/types');
const usersExcludedFields = require('../Users/excludedFields');
const { usersType } = require('../Users/types');

const userAddressesType = new GraphQLObjectType({
  name: 'UserAddresses',
  fields: {
    id: { type: new GraphQLNonNull(BigInt) },
    user_id: { type: new GraphQLNonNull(GraphQLInt) },
    user: {
      type: new GraphQLNonNull(usersType),
      resolve: (source, args, { loaders }, info) => {
        const fields = Object.keys(
          graphqlFields(info, {}, { excludedFields: usersExcludedFields })
        );

        return loaders.users.load(`${source.user_id}@${fields.join(',')}`);
      },
    },
    address_type_id: { type: new GraphQLNonNull(GraphQLInt) },
    address_type: {
      type: new GraphQLNonNull(addressTypesType),
      resolve: (source, args, { loaders }, info) => {
        const fields = Object.keys(graphqlFields(info));

        return loaders.addressTypes.load(
          `${source.address_type_id}@${fields.join(',')}`
        );
      },
    },
    address_line_1: { type: new GraphQLNonNull(GraphQLString) },
    address_line_2: { type: new GraphQLNonNull(GraphQLString) },
    barangay: { type: new GraphQLNonNull(GraphQLString) },
    city_town: { type: new GraphQLNonNull(GraphQLString) },
    state_province: { type: new GraphQLNonNull(GraphQLString) },
    postal_code: { type: new GraphQLNonNull(GraphQLString) },
    country: { type: new GraphQLNonNull(GraphQLString) },
    is_default: { type: new GraphQLNonNull(GraphQLBoolean) },
    rank: { type: new GraphQLNonNull(GraphQLInt) },
    created_at: { type: new GraphQLNonNull(GraphQLString) },
    updated_at: { type: new GraphQLNonNull(GraphQLString) },
    deleted_at: { type: GraphQLString },
  },
});

module.exports = { userAddressesType };
