var transformer = require('dat-transformer');
var tBuffer = transformer('buffer');
var tBase64 = transformer('base64');
// require any other modules you may need here.

module.exports = transformer.Conversion(tBuffer, tBase64, convert);

// this is a synchronous conversion.
function convert(buffer) {
  return buffer.toString('base64');
}
