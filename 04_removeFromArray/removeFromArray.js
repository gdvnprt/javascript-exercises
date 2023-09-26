const removeFromArray = function(array, ...remove) {
    // find the index # of the values in the array to be removed
    let removeIndex = array.indexOf(remove);
    // return a new array with those index numbers removed
    array.splice(removeIndex, 1);
    return array;
    // loop function for each additional argument
};

// Do not edit below this line
module.exports = removeFromArray;
