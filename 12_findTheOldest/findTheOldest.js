const findTheOldest = function (people) {
    let lifeSpan = 0;
    let maxLife = 0;
    let count = 0;
    for (i = 0; i < people.length; i++) {
        if (people[i].yearOfDeath === undefined) people[i].yearOfDeath = new Date().getFullYear(); //in case the year of death is absent
        lifeSpan = (people[i].yearOfDeath - people[i].yearOfBirth);
        if (maxLife < lifeSpan) {
        maxLife = lifeSpan;
            if (i !== 0) count ++;
        }
    }
    return people[count];

};

// Do not edit below this line
module.exports = findTheOldest;
