const fibonacci = function(member) {
    let arr = [0, 1];
    for  (let i = 2; i <= member; i++) {
        arr[i] = arr[i-1] + arr[i-2];
    }
    if (member < 0) return "OOPS";
    return arr[member];
};

// Do not edit below this line
module.exports = fibonacci;
