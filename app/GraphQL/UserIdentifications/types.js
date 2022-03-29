const graphqlFields = require('graphql-fields');
const {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLInt,
  GraphQLBoolean,
} = require('graphql');
const BigInt = require('graphql-bigint');

const { identificationTypesType } = require('../IdentificationTypes/types');
const usersExcludedFields = require('../Users/excludedFields');
const { usersType } = require('../Users/types');

const userIdentificationsType = new GraphQLObjectType({
  name: 'UserIdentifications',
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
    identification_type_id: { type: new GraphQLNonNull(GraphQLInt) },
    identification_type: {
      type: new GraphQLNonNull(identificationTypesType),
      resolve: (source, args, { loaders }, info) => {
        const fields = Object.keys(graphqlFields(info));

        return loaders.identificationTypes.load(
          `${source.identification_type_id}@${fields.join(',')}`
        );
      },
    },
    images_url: { type: new GraphQLNonNull(GraphQLString) },
    identification_number: { type: new GraphQLNonNull(GraphQLString) },
    expiration_date: { type: new GraphQLNonNull(GraphQLString) },
    is_default: { type: new GraphQLNonNull(GraphQLBoolean) },
    created_at: { type: new GraphQLNonNull(GraphQLString) },
    updated_at: { type: new GraphQLNonNull(GraphQLString) },
    deleted_at: { type: GraphQLString },
  },
});

module.exports = { userIdentificationsType };
