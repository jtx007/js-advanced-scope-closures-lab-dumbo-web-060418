const produceDrivingRange = function (range) {
  return function (num1, num2) {
    let distance = parseInt(num2) - parseInt(num1)
    console.log("distance", distance)
    console.log("range", range)
    if (range < distance) {
      let outOfRange = distance - range
      console.log("outOfRange", outOfRange);
      return `${outOfRange} blocks out of range`
    } else if (range > distance) {
      let withinRange = range - distance
      return `within range by ${withinRange}`
    }
  }
}

const produceTipCalculator =  function (tipPercentage) {
  return function (fare) {
    return tipPercentage * fare
  }
}

const createDriver = function () {
  let driverId = 0
  return class {
    constructor(name) {
      this.id = driverId++
      this.name = name
    }
  }
}
