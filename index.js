const Protocol = require('azure-iot-device-mqtt').Mqtt;
const Device = require('./modules/device/device');
const logger = require('./utils/logger');
const config = require('./config');


// Configuration device
const configuration = {
  sensorId: config.SENSORID,
  type: config.SENSORTYPE,
  freqmsg: config.FREQMSG,
  conn_str: config.CONN_STR,
  protocol: Protocol
}


// Device instance
const sensor = new Device(configuration);
sensor.setup();
sensor.start();


// process events
process
  .on('unhandledRejection', (reason, p) => {
    logger.error('Unhandled Rejection at Promise');
  })
  .on('uncaughtException', err => {
    logger.error(`Uncaught Exception: ${err.message}`);
    process.exit(1);
  })
  .on('SIGINT', () => {
    logger.success(`Process ${process.pid} has been interrupted`);
    process.exit();
  })
  .on('SIGTERM', signal => {
    logger.success(`Process ${process.pid} received a SIGTERM signal`);
    process.exit();
  })
  .on('exit', () => {
    logger.success(`Local Edge end`);
    process.exit();
  });