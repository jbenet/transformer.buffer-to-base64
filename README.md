# transformer.buffer-to-base64

[Transformer](http://github.com/jbenet/transformer) conversion: buffer to base64

This module is a transformer conversion, published on npm. Read more about transformer at:

- the transformer website: <http://transform.datadex.io>
- the transformer repository: <http://github.com/jbenet/transformer>

## Usage

Use this module through transformer.

### Javascript

```js
var transformer = require('dat-transformer');
var tBufferToBase64 = transformer('buffer', 'base64');
tBufferToBase64(new Buffer('beep boop', 'ascii')); // 'YmVlcCBib29w'
```
