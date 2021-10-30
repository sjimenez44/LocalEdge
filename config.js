const dotenv = require('dotenv');
const path = require('path');

// Load environment variables from .env file
dotenv.config({
    path: path.resolve(__dirname, `./${process.env.NODE_ENV}.env`)
});

// Export config object
module.exports = {
    NODE_ENV: process.env.NODE_ENV || 'development',
    CONN_STR: process.env.CONN_STR || '[your_connection_string]',
    SENSORID: process.env.SENSORID || 'DV001',
    SENSORTYPE: process.env.SENSORTYPE || 'temperature',
    FREQMSG: process.env.FREQMSG || 3000,
}