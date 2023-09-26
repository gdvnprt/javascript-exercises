const repeatString = function(string, num) {
// add string to an empty array
// repeat this num times
// output array contents
let stringArray = []
for (let i=0; i < num; i++) {
    stringArray.push(string)
}
return stringArray.join()
};

// Do not edit below this line
module.exports = repeatString;
