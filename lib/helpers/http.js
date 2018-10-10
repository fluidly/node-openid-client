const got = require('got');
const bunyan = require('bunyan');

const jsonLogger = bunyan.createLogger({
  name: 'openid-client',
  serializers: bunyan.stdSerializers,
});

/*
 * url {String}
 * options {Object}
 * options.headers {Object}
 * options.body {String|Object}
 * options.form {Boolean}
 * options.query {Object}
 * options.timeout {Number}
 * options.retries {Number}
 * options.followRedirect {Boolean}
 */
module.exports.get = function get(url, options) {
  jsonLogger.info({ message: 'SSO OpenId Client GET', url, options });
  return got.get(url, options);
};

module.exports.post = function post(url, options) {
  jsonLogger.info({ message: 'SSO OpenId Client POST', url, options });
  return got.post(url, options);
};

module.exports.HTTPError = got.HTTPError;
