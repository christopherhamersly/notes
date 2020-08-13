'use strict';

// This is not a constructor.

const http = {};

http.fetch = function (opts) {
  if (opts) {
    console.log(`Fetching ${opts.url}`);
    console.log(`Method ${opts.method}`);
  }
};

module.exports = http;