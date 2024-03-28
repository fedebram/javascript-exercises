const removeFromArray = function(contenitore, ...delezione) {
    return contenitore.filter(numero => !delezione.includes(numero)); 
};

// Do not edit below this line
module.exports = removeFromArray;
