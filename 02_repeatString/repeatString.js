const repeatString = function(string, amount) {
    let newString;
    try{
        newString = string.repeat(amount);
    }
    catch(error){
        newString = "ERROR";
    }
    finally{
        return newString;
    }
};

// Do not edit below this line
module.exports = repeatString;