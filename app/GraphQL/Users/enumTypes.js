const { GraphQLEnumType } = require('graphql');

const titleEnumType = new GraphQLEnumType({
  name: 'TitleEnum',
  values: {
    EMPTY: { value: '' },
    MR: { value: 'Mr' },
    MRS: { value: 'Mrs' },
    MS: { value: 'Ms' },
  },
});

const sexEnumType = new GraphQLEnumType({
  name: 'SexEnum',
  values: {
    EMPTY: { value: '' },
    MALE: { value: 'MALE' },
    FEMALE: { value: 'FEMALE' },
  },
});

module.exports = { titleEnumType, sexEnumType };
