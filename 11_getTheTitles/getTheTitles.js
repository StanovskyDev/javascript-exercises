const getTheTitles = function(arr) {
    let arrayOfTitles = [];
    for (obj of arr){
        arrayOfTitles.push(obj.title);
    }
    return arrayOfTitles;
};

// Do not edit below this line
module.exports = getTheTitles;
