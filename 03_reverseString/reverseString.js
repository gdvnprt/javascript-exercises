const reverseString = function(string) {
// create an empty array
// add all characters from the input into the array in reverse order
// output the array in joined format
let reverseArray = []
for (i = 0, i < string.length, i++)
    reverseArray.unshift(string.slice(i, i))
};
return  reverseArray.join("")

// Do not edit below this line
module.exports = reverseString;
