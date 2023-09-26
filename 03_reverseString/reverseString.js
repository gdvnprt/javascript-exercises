const reverseString = function(string) {
    let reverseArray = []
    for (let i = 0; i < string.length; i++) {
        reverseArray.unshift(string.slice(i, i + 1));
    }
    return  reverseArray.join("");
}

// Do not edit below this line
module.exports = reverseString;
