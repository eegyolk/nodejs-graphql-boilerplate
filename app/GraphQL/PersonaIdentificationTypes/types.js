const graphqlFields = require('graphql-fields');
const {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLInt,
  GraphQLBoolean,
} = require('graphql');

const { identificationTypesType } = require('../IdentificationTypes/types');
const personansExcludedFields = require('../Personas/excludedFields');
const { personasType } = require('../Personas/types');

const personaIdentificationTypesType = new GraphQLObjectType({
  name: 'PersonaIdentificationTypes',
  fields: {
    id: { type: new GraphQLNonNull(GraphQLInt) },
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
    is_required: { type: new GraphQLNonNull(GraphQLBoolean) },
    created_at: { type: new GraphQLNonNull(GraphQLString) },
    updated_at: { type: new GraphQLNonNull(GraphQLString) },
    deleted_at: { type: GraphQLString },
  },
});

module.exports = { personaIdentificationTypesType };
