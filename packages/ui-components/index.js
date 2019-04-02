"use strict";

if (process.env.NODE_ENV === "production") {
  module.exports = require("./cjs/ui-components.min.js");
} else {
  module.exports = require("./cjs/ui-components.js");
}
