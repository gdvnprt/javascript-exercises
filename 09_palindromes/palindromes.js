const palindromes = function (a) {
    let letters = a.split('');
    let palin = letters.reverse();
    if (palin === letters) {
        return true;
    } else {
        return false;
    };
};

// Do not edit below this line
module.exports = palindromes;
