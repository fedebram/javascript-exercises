const sumAll = function(min, max) {
    let somma = 0;
    if ((!Number.isInteger(min)) || (!Number.isInteger(max)) || (min < 0) || (max < 0)){
        return `ERROR`;
    }
    else if (max < min){
        for (i= max; i <= min; i++){
            somma += i;
        }
    }else {
        for (i= min; i <= max; i++){
        somma += i;
        }
    }
    return somma;
};

// Do not edit below this line
module.exports = sumAll;
