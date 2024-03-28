const repeatString = function(word, times) {
    let messaggio = "";
    if (times < 0){
        return "ERROR";
    }
    for (let i = 0; i < times; i++){
        messaggio = messaggio + word;
    }
    return messaggio;
};

// Do not edit below this line
module.exports = repeatString;
