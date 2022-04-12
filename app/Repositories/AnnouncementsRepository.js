const { raw } = require('objection');

const Announcements = require('../Models/Announcements');

class AnnouncementsRepository {
  static async announcements(fields) {
    return await Announcements.query().select(raw(fields));
  }

  static async getAnnouncement(id, fields) {
    return await Announcements.query().select(raw(fields)).findById(id);
  }

  static async createAnnouncement(input) {
    const { title, description } = input;

    return await Announcements.query().insert({
      title,
      description,
    });
  }
}

module.exports = AnnouncementsRepository;
