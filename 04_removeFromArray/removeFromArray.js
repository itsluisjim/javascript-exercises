const removeFromArray = function(arr) {
    
    let arrOfArgs = [...arguments]; 
  
    arrOfArgs.shift(); 
    
    return arr.filter(item => arrOfArgs.indexOf(item) == -1);

};

// Do not edit below this line
module.exports = removeFromArray;
