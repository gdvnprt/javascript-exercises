const findTheOldest = function(i) {
    i.sort(function(a, b) {
        const lastguy = a.yearOfDeath - a.yearOfBirth;
        const nextguy = b.yearOfDeath - b.yearOfBirth;
        return lastguy > nextguy ? -1 : 1;
    });
    return i[0];
};

// Do not edit below this line
module.exports = findTheOldest;
