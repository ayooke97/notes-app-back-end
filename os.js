/* eslint-disable linebreak-style */
const os = require('os');

const net = os.networkInterfaces();
console.log(net['Wi-Fi'][0].mac);
