const palindromes = function (a) {
    let lower = a.toLowerCase();
    let red = lower.replace(/[,.! ;:'"?_-]/g, "");
    let letters = red.split('');
    let palin = letters.reverse();
    if (palin === letters) {
        return true;
    } else {
        return false;
    };
};

// Do not edit below this line
module.exports = palindromes;
