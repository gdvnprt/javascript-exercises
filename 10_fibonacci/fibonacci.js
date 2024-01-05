const fibonacci = function(a) {
    if (a <= 0) {
        return "OOPS";
    } else {
        let arr = [1, 1, 2, 3];
        for (var i = 4; i < (a); i++) {
            arr.push(arr[i - 2] + arr[i - 1]);
        };
        return arr[a - 1];
    };
};

// Do not edit below this line
module.exports = fibonacci;
