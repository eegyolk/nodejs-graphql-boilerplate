const graphqlFields = require('graphql-fields');
const {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLInt,
  GraphQLBoolean,
} = require('graphql');
const BigInt = require('graphql-bigint');

const { emailTypesType } = require('../EmailTypes/types');
const usersExcludedFields = require('../Users/excludedFields');
const { usersType } = require('../Users/types');

const userEmailsType = new GraphQLObjectType({
  name: 'UserEmails',
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
    email_type_id: { type: new GraphQLNonNull(GraphQLInt) },
    email_type: {
      type: new GraphQLNonNull(emailTypesType),
      resolve: (source, args, { loaders }, info) => {
        const fields = Object.keys(graphqlFields(info));

        return loaders.emailTypes.load(
          `${source.email_type_id}@${fields.join(',')}`
        );
      },
    },
    email_address: { type: new GraphQLNonNull(GraphQLString) },
    is_default: { type: new GraphQLNonNull(GraphQLBoolean) },
    rank: { type: new GraphQLNonNull(GraphQLInt) },
    created_at: { type: new GraphQLNonNull(GraphQLString) },
    updated_at: { type: new GraphQLNonNull(GraphQLString) },
    deleted_at: { type: GraphQLString },
  },
});

module.exports = { userEmailsType };
