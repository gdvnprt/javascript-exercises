const findTheOldest = function(i) {
    i.sort(function(a, b) {
        if ("yearOfDeath" in a) {
        const lastguy = a.yearOfDeath - a.yearOfBirth;
        } else {
        const lastguy = getFullYear() - a.yearOfBirth;
        };
        if ("yearOfDeath" in b) {
            const lastguy = b.yearOfDeath - b.yearOfBirth;
            } else {
            const lastguy = getFullYear() - b.yearOfBirth;
            };
        return lastguy > nextguy ? -1 : 1;
    });
    return i[0];
};

// Do not edit below this line
module.exports = findTheOldest;
