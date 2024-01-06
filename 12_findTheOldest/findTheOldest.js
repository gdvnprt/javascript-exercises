const findTheOldest = function(i) {
    const date = new Date();
    const year = date.getFullYear();
    i.sort(function(a, b) {
        if ("yearOfDeath" in a) {
            lastguy = a.yearOfDeath - a.yearOfBirth;
        } else {
            lastguy = year - a.yearOfBirth;
        };
        if ("yearOfDeath" in b) {
            nextguy = b.yearOfDeath - b.yearOfBirth;
        } else {
            nextguy = year - b.yearOfBirth;
        };
        return lastguy > nextguy ? -1 : 1;
    });
    return i[0];
};

// Do not edit below this line
module.exports = findTheOldest;
