const repeatString = function(string,num) {
    if (num >= 0){
        let element = '';
        for (let i = 1; i <= num; i++) {
            element += string;
        }
        return element;
    }else{return 'ERROR';}
};

// Do not edit below this line
module.exports = repeatString;
