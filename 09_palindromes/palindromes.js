const palindromes = function (str) {

       
    let regex = /[a-z0-9]/;
    
    let arrStr = Array.from(str.toLowerCase());
     
    let stringAsArr = arrStr.filter(item =>  item.match(regex))
    
    
    let finalFilteredStr = stringAsArr.join('');
    let reversedFilteredStr = stringAsArr.reverse().join('');
    

    let isPalindrome = false;
    if( finalFilteredStr == reversedFilteredStr){
        isPalindrome = true;
    }
    return isPalindrome;
};



// Do not edit below this line
module.exports = palindromes;
