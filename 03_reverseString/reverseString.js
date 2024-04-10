const reverseString = function(string) {
    /*
    Algorithm:
    Notes:

    - Splitting up the string {
        If you use the split() String method on a String,
        then you will make each character an index on the string
    }
    - Reversal {
        Then, to reverse, we are going to do two things:

        1. Use a loop to iterate through each index of the
        Array we created through the String

        2. Use the unshift() method to adds each indexed letter
        element into an array (at the beginning),
        and "unshift" older elements to the right,
        therefore making each letter in reverse.
    }
    */

    // Splitting up the String
    const stringArr = string.split("");
    const stringArrLength = stringArr.length;
    const stringArr2 = [];
    // use a loop to iterate through each index of the
    // Array we created through the String
    for (let i = 0; i < stringArrLength; i++) {
        stringArr2.push(stringArr.pop());
    }
    const string2 = stringArr2.join("");

    return string2;
};

// Do not edit below this line
module.exports = reverseString;
