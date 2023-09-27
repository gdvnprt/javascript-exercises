const sumAll = function(a, b) {
    if (typeof a === "number" && typeof b === "number") {
        let newSum = 0;
        let sortNumbers = [a, b];
        sortNumbers.sort(function(x, y){return x - y});
        const lowNumber = sortNumbers[0];
        const highNumber = sortNumbers[1];
        for (let i = lowNumber; i < highNumber + 1; i++) { 
            newSum += i;
        };
        return newSum;
    } else {
        return "ERROR"
    };
};

// Do not edit below this line
module.exports = sumAll;
