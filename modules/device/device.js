const Client = require('azure-iot-device').Client;
const sensorFactory = require('../sensor/SensorFactory');
const utils = require('../../utils/utils');
const logger = require('../../utils/logger');

class Device {
  constructor(config) {
    this.sensor = sensorFactory.create(config.sensorId, config.type);
    this.client = Client.fromConnectionString(config.conn_str, config.protocol);
    this.sendInterval = null;
    this.time = config.freqmsg;
  }
  // setup the device
  setup() {
    // ConnectHandler
    this.client.on('connect', () => {
      logger.success('Device connected');
      this.sendInterval = setInterval(() => {
        const message = this.sensor.readValue();
        logger.success(`Sending message ${message.getData()}`);
        this.client.sendEvent(message, utils.printResultFor('send'));
      }, this.time);
    });
    // DisconnectHandler
    this.client.on('disconnect', () => {
      logger.success('Device disconnected');
      clearInterval(this.sendInterval);
      this.client.open().catch((err) => {
        console.error(err.message);
      });
    });
    // ErrorHandler
    this.client.on('error', (err) => {
      logger.error(err.message);
    });
    // MessageHandler
    this.client.on('message', (msg) => {
      logger.success(`Id: ${msg.messageId} Body: ${msg.data}`);
      this.client.complete(msg, utils.printResultFor('completed'));
    });
  }
  // start the device
  start() {
    this.client.open()
      .catch(err => {
        console.error(`Could not connect: ${err.message}`);
      }
    );
  }
}

module.exports = Device;