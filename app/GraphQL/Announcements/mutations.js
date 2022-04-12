const { createAnnouncementInputType } = require('./inputTypes'),
  { createAnnouncementResolver } = require('./resolvers'),
  { announcementsType } = require('./types');

const createAnnouncement = {
  type: announcementsType,
  args: {
    input: { type: createAnnouncementInputType },
  },
  resolve: async (source, args) => await createAnnouncementResolver(args),
};

module.exports = {
  createAnnouncement,
};
