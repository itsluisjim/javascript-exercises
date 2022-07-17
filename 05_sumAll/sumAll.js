const sumAll = function(num1, num2) {
    let sum = 0;

    if(Array.isArray(num2) || Array.isArray(num1) || num1 < 0 || num2 < 0 || typeof num1 == "string" || typeof num2 == "string"){
        return "ERROR";
    }

    for(let i = Math.min(num1,num2);i<=Math.max(num1,num2);i++){
        sum+=i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
