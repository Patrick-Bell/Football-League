const crypto = require('crypto');

const generateRandomString = () => {
  return crypto.randomBytes(32).toString('hex');
};

const sessionSecret = generateRandomString();

console.log(sessionSecret);

module.exports = {
  sessionSecret: 'yourSecretKeyHere'
};