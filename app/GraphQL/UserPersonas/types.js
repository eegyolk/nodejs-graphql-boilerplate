const {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLInt,
  GraphQLBoolean,
} = require('graphql');

const { personasType } = require('../Personas/types');
const { usersType } = require('../Users/types');

const userPersonasType = new GraphQLObjectType({
  name: 'UserPersonas',
  fields: {
    id: { type: new GraphQLNonNull(GraphQLInt) },
    user_id: { type: new GraphQLNonNull(GraphQLInt) },
    user: {
      type: new GraphQLNonNull(usersType),
      resolve: (source, args, { loaders }) =>
        loaders.users.load(source.user_id),
    },
    persona_id: { type: new GraphQLNonNull(GraphQLInt) },
    persona: {
      type: new GraphQLNonNull(personasType),
      resolve: (source, args, { loaders }) =>
        loaders.personas.load(source.persona_id),
    },
    is_default: { type: new GraphQLNonNull(GraphQLBoolean) },
    created_at: { type: new GraphQLNonNull(GraphQLString) },
    updated_at: { type: new GraphQLNonNull(GraphQLString) },
    deleted_at: { type: GraphQLString },
  },
});

module.exports = { userPersonasType };
