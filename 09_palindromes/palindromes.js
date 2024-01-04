const palindromes = function (a) {
    let lower = a.toLowerCase();
    let red = lower.replace(/[,.! ;:'"?_-]/g, "");
    return red.split("").reverse().join("") == red;
};

// Do not edit below this line
module.exports = palindromes;
