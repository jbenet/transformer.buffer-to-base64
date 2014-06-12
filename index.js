var Conversion = require('transformer-conversion');
var tBuffer = require('transformer.buffer');
var tBase64 = require('transformer.base64');
// require any other modules you may need here.

module.exports = Conversion(tBuffer, tBase64, convert);

// this is a synchronous conversion.
function convert(buffer) {
  return buffer.toString('base64');
}
