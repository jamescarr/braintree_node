var util = require('util'),
    Config = require("./braintree/config").Config,
    Environment = require("./braintree/environment").Environment,
    Gateway = require("./braintree/gateway").Gateway,
    TransactionGateway = require("./braintree/transaction_gateway").TransactionGateway;
    AuthenticationError = require("./braintree/exceptions/authentication_error").AuthenticationError,
    errorTypes = require("./braintree/exceptions/error_types");

if (process.version !== 'v0.2.0') {
  util.puts('WARNING: node.js version ' + process.version + ' has not been tested with the braintree library');
}

var connect = function(config) {
  var gateway = Gateway(Config(config));
  return {
    transaction: TransactionGateway(gateway)
  };
};

exports.connect = connect;
exports.version = '0.1.0';
exports.AuthenticationError = AuthenticationError;
exports.Environment = Environment;
exports.errorTypes = errorTypes;
