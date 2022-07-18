const ftoc = function(temp) {
    return Math.round(((temp - 32) * 5.0/9)*10)/10;
};

const ctof = function(temp) {
  return Math.round((temp * (9.0/5.0) + 32)*10)/10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
