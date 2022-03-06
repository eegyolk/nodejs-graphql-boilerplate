const Devices = require('../../Models/Devices');

class DevicesRepository {
  static async getDevices() {
    return await Devices.query();
  }
}

module.exports = DevicesRepository;
