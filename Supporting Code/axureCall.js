let side1 = require("./side1.js");
let side2 = require("./side2.js");
let side3 = require("./side3.js");
let side4 = require("./side4.js");
let foo = require("./AzureScirpt");

const req = {
  body: {
    trafficSide: {
      side1: side1,
      side2: side2,
      side3: side3,
      side4: side4,
    },
  }
};

foo(req);
