const graphqlFields = require('graphql-fields');

const AnnouncementsRepository = require('../../Repositories/AnnouncementsRepository');

const announcementsResolver = async (info) => {
  const fields = Object.keys(graphqlFields(info));

  return await AnnouncementsRepository.announcements(fields.join(','));
};

const getAnnouncementResolver = async (id, info) => {
  const fields = Object.keys(graphqlFields(info));

  return await AnnouncementsRepository.getAnnouncement(id, fields.join(','));
};

const createAnnouncementResolver = async (args) => {
  return await AnnouncementsRepository.createAnnouncement(args.input);
};

module.exports = {
  announcementsResolver,
  getAnnouncementResolver,
  createAnnouncementResolver,
};
