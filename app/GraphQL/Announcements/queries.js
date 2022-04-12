const { GraphQLList, GraphQLString } = require('graphql');

const { announcementsType } = require('./types'),
  { announcementsResolver, getAnnouncementResolver } = require('./resolvers');

const announcements = {
  type: new GraphQLList(announcementsType),
  resolve: async (source, args, context, info) =>
    await announcementsResolver(info),
};

const getAnnouncement = {
  type: announcementsType,
  args: {
    id: { type: GraphQLString },
  },
  resolve: async (source, args, context, info) =>
    await getAnnouncementResolver(args.id, info),
};

module.exports = {
  announcements,
  getAnnouncement,
};
