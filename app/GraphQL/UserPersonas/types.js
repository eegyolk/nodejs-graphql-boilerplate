const graphqlFields = require('graphql-fields');
const {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLInt,
  GraphQLBoolean,
} = require('graphql');
const BigInt = require('graphql-bigint');

const personansExcludedFields = require('../Personas/excludedFields');
const { personasType } = require('../Personas/types');
const usersExcludedFields = require('../Users/excludedFields');
const { usersType } = require('../Users/types');

const userPersonasType = new GraphQLObjectType({
  name: 'UserPersonas',
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
    persona_id: { type: new GraphQLNonNull(GraphQLInt) },
    persona: {
      type: new GraphQLNonNull(personasType),
      resolve: (source, args, { loaders }, info) => {
        const fields = Object.keys(
          graphqlFields(info, {}, { excludedFields: personansExcludedFields })
        );

        return loaders.personas.load(
          `${source.persona_id}@${fields.join(',')}`
        );
      },
    },
    is_default: { type: new GraphQLNonNull(GraphQLBoolean) },
    created_at: { type: new GraphQLNonNull(GraphQLString) },
    updated_at: { type: new GraphQLNonNull(GraphQLString) },
    deleted_at: { type: GraphQLString },
  },
});

module.exports = { userPersonasType };
