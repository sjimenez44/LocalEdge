const Message = require('azure-iot-device').Message;

class Sensor {
  constructor(name, type, config) {
    this.name = name; // device id
    this.type = type; // sensor type
    this.config = config; // sensor config (min, max)
  }
  readValue() {
    // return random value between min and max
    const value = this.config.min + Math.random() * (this.config.max - this.config.min);
    // return value as a message
    const data = JSON.stringify({
      deviceId: this.name,
      type: this.type,
      value: value
    });
    const message = new Message(data);
    return message;
  }
}

module.exports = Sensor;