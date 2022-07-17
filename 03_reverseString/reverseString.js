const reverseString = function(str) {
    let strArr = str.split('');
    let reversedStr = '';

    for(let i = strArr.length-1;i>=0;i--){
        reversedStr += strArr[i];
    }
    return reversedStr;
};

// Do not edit below this line
module.exports = reverseString;
