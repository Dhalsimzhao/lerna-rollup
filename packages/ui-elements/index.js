'use strict';

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./cjs/ui-elements.min.js');
} else {
  module.exports = require('./cjs/ui-elements.js');
}
