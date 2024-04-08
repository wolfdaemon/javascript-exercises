const repeatString = function(string, num) {
    let string2;
    if (num < 0) {
        string2 = "ERROR";
    } else {
        string2 = string.repeat(num);
    }
    return string2;
};

// Do not edit below this line
module.exports = repeatString;
