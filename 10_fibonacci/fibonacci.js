const fibonacci = function(n) {
    if (n < 0) return "OOPS";
    if (n == 0) return 0;
    
    let snippet = [1, 1, 2];

    for (let count = 3; count < n; count++){
        let next = snippet[1] + snippet[2];
        snippet[0] = snippet[1];
        snippet[1] = snippet[2];
        snippet[2] = next;
    }

    return snippet[Math.min(n-1, 2)];
};



// Do not edit below this line
module.exports = fibonacci;
