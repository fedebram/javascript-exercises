const reverseString = function(word) {
    let messaggio = "";
    const caratteri = Array.from(word);
    for (let i = caratteri.length-1; i >= 0; i--){
        messaggio += caratteri[i];
    }
    return messaggio;
};

// Do not edit below this line
module.exports = reverseString;
