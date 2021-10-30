const Sensor = require('./Sensor');

class Temperature {
  constructor(deviceId) {
    // Set type of sensor and usual parameters of sensor
    return new Sensor(deviceId, 'temperature', { min: -40, max: 125 });
  }
}

module.exports = Temperature;