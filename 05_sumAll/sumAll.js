const sumAll = function(a, b) {
    let newSum = 0
    let sortNumbers = [a, b]
    sortNumbers.sort(function(x, y){return x - y});
    const lowNumber = sortNumbers[0];
    const highNumber = sortNumbers[1];
    for (let i = lowNumber; i < highNumber + 1; i++) { // create a loop starting at a
        newSum += i;
    };
    return newSum;
    // create a new number variable starting at a
    // add each number from a to b in it
    // return the sum of all
};

// Do not edit below this line
module.exports = sumAll;
