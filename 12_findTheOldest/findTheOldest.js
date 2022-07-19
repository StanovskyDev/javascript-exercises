const findTheOldest = function(arr) {
    let oldestPerson;
    let oldestAge = 0;
    for (obj of arr){
        let age;
        if (Object.keys(obj).includes("yearOfDeath")) {
            age = obj.yearOfDeath - obj.yearOfBirth
        } else {
            age = 2022 - obj.yearOfBirth;
        }
        if (age > oldestAge) {
            oldestAge = age;
            oldestPerson = obj;
        }
    }
    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
