const findTheOldest = function(arr) {
   
    let stillAlive = arr.filter(person => !person.hasOwnProperty('yearOfDeath'))

    let year = new Date().getFullYear();
    if(stillAlive.length == 1){
        stillAlive[0]['yearOfDeath'] = year;
    }

    let oldToYoung = arr.sort((a,b) => a.yearOfDeath - a.yearOfBirth > b.yearOfDeath - b.yearOfBirth? -1: 1);

    return oldToYoung[0];
};

// Do not edit below this line
module.exports = findTheOldest;
