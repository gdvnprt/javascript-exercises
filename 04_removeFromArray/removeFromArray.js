const removeFromArray = function(array, remove) {
    for (let i = 1; i < arguments.length; i++) {
        let removeArgument = arguments(i)
        let removeIndex = array.indexOf(removeArgument);
        array.splice(removeIndex, 1);
        return array;
    }
    // loop function for each additional argument
};

// Do not edit below this line
module.exports = removeFromArray;
