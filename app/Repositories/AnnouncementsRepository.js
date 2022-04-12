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
    const { code, label, description } = input;

    return await Announcements.query().insert({
      code,
      label,
      description,
    });
  }
}

module.exports = AnnouncementsRepository;
