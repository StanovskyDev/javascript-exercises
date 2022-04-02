const removeFromArray = function(array, ...args) {
    let hashArray = new Map();
    for (const arg of args){
        hashArray.set(arg, true);
    }

    let newArray = new Array();
    const arraySize = array.length;
    for (let i = 0; i < arraySize; ++i){
        if (hashArray.get(array[i]) != true){
            newArray.push(array[i]);
        }
    }

    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
