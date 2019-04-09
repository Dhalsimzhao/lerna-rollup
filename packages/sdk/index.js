'use strict';

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./cjs/sdk.min.js');
} else {
  module.exports = require('./cjs/sdk.js');
}
