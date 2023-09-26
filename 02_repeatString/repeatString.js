const repeatString = function(string, num) {
    let stringArray = []
    if (num < 0) {
        return "ERROR";
    } else {
        for (let i=0; i < num; i++) {
        stringArray.push(string)
        }      
        return stringArray.join("")
    }
};

// Do not edit below this line
module.exports = repeatString;
