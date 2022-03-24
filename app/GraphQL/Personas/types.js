const {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLInt,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} = require('graphql');

const {
  getPersonaIdentificationTypeIdByPersonaIdResolver,
} = require('../PersonaIdentificationTypes/resolvers');

const personasType = new GraphQLObjectType({
  name: 'Personas',
  fields: {
    id: { type: new GraphQLNonNull(GraphQLInt) },
    code: { type: new GraphQLNonNull(GraphQLString) },
    label: { type: new GraphQLNonNull(GraphQLString) },
    description: { type: new GraphQLNonNull(GraphQLString) },
    is_active: { type: new GraphQLNonNull(GraphQLBoolean) },
    created_at: { type: new GraphQLNonNull(GraphQLString) },
    updated_at: { type: new GraphQLNonNull(GraphQLString) },
    deleted_at: { type: GraphQLString },
    personaIdentificationTypeIds: {
      type: new GraphQLList(GraphQLInt),
      resolve: (source) =>
        getPersonaIdentificationTypeIdByPersonaIdResolver(source.id),
    },
  },
});

module.exports = { personasType };
