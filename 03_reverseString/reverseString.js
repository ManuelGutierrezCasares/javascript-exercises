const reverseString = function(string) {
    let reverseStringArray;
    reverseStringArray = string.split('');
    console.log(reverseStringArray)
    reverseStringArray = reverseStringArray.reverse();
    console.log(reverseStringArray)
    string = reverseStringArray.join('');
    console.log(string)
    return string;
};

// Do not edit below this line
module.exports = reverseString;
