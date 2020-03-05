// src/http/get-index/index.js
let arc = require("@architect/functions");

exports.handler = arc.proxy.public({ spa: true });
