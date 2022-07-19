const palindromes = function (string) {
    let newString = '';
    string = string.toLowerCase();
    for (let char of string){
        if (97 <= char.charCodeAt(0) && char.charCodeAt(0) <= 122) newString += char;
    }

    console.log(newString);

    sLen = newString.length;
    for(let i = 0; i < sLen / 2 - 1; ++i){
        if (newString[i] != newString[sLen - 1 - i]) return false
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
