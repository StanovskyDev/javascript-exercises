Array.prototype.validate = function(func){
    for (let value of this){
        if (!func(value)) return false;
    }
    return true;
};

const sumAll = function(start, end) {
    if (!([start, end].validate(num => 0 <= num) && 
    [start, end].validate(num => typeof(num) === "number"))){
        return "ERROR";
    }
    
    let temp = Math.min(start, end);
    end = Math.max(start, end);
    start = temp;

    let result = 0;
    for (let i = start; i <= end; ++i){
        result += i;
    }
    return result;
};

// Do not edit below this line
module.exports = sumAll;
