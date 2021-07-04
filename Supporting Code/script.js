let side1 = require("./side1.js");
let side2 = require("./side2.js");
let side3 = require("./side3.js");
let side4 = require("./side4.js");

/*============================ TWEKABLE VALUE ============================ */

// Time to finsh one circle in seconds
ROUND_ABOUT_TIME = 600;

// weights of each vehcile
const VEHCILE_WEIGHTS = {
  bicycle: 0.1,
  car: 0.5,
  motorbike: 0.2,
  bus: 0.8,
  truck: 0.9,
};

/*============================ Logic ============================ */

// count number of vehciles
const getNumberOfVehciles = (objectTrackingResultJSON) => {
  const VehcileCount = {
    bicycle: 0,
    car: 0,
    motorbike: 0,
    bus: 0,
    truck: 0,
  };

  // looping through each detected Object
  for (var trackedObjectIndex in objectTrackingResultJSON) {
    VehcileCount[objectTrackingResultJSON[trackedObjectIndex].class] += 1;
  }

  return VehcileCount;
};

// function to get size of traffic
const getTrafficSize = (VehcileCount) => {
  let trafficSize = 0;
  let totalVehciles = 0;

  for (var vehcileType in VehcileCount) {
    // change the logic here to calculate size of vehciles
    trafficSize += VehcileCount[vehcileType] * VEHCILE_WEIGHTS[vehcileType];
    totalVehciles += 1;
  }

  return trafficSize + Math.exp(totalVehciles);
};

// function to get time for green signal within ROUND baout time

const getGreenTime = (ROUND_ABOUT_TIME, side1, side2, side3, side4) => {
  trafficSizeSide1 = getTrafficSize(getNumberOfVehciles(side1));
  trafficSizeSide2 = getTrafficSize(getNumberOfVehciles(side2));
  trafficSizeSide3 = getTrafficSize(getNumberOfVehciles(side3));
  trafficSizeSide4 = getTrafficSize(getNumberOfVehciles(side4));

  const totalTrafficSize =
    trafficSizeSide1 + trafficSizeSide2 + trafficSizeSide3 + trafficSizeSide4;

  return {
    side1: Math.floor((trafficSizeSide1 / totalTrafficSize) * ROUND_ABOUT_TIME),
    side2: Math.floor((trafficSizeSide2 / totalTrafficSize) * ROUND_ABOUT_TIME),
    side3: Math.floor((trafficSizeSide3 / totalTrafficSize) * ROUND_ABOUT_TIME),
    side4: Math.floor((trafficSizeSide4 / totalTrafficSize) * ROUND_ABOUT_TIME),
  };
};
/*============================ Function Calls ============================ */

console.log(getNumberOfVehciles(side1));
console.log(getTrafficSize(getNumberOfVehciles(side1)));

console.log(getNumberOfVehciles(side2));
console.log(getTrafficSize(getNumberOfVehciles(side2)));

console.log(getNumberOfVehciles(side3));
console.log(getTrafficSize(getNumberOfVehciles(side3)));

console.log(getNumberOfVehciles(side4));
console.log(getTrafficSize(getNumberOfVehciles(side4)));

console.log(getGreenTime(ROUND_ABOUT_TIME, side1, side2, side3, side4));
