const sumAll = function(num1,num2) {
    let max=0;
    let min=0;
    let result=0;
    if(typeof(num1) !== 'number' || typeof(num2) !== 'number'){
        return 'ERROR';
    }else if (num1 < 0 || num2 < 0){
        return 'ERROR';
    }else{
        if (num1 > num2){
            max = num1;
            min = num2;
        }else{
            max = num2;
            min = num1;
        }
    for(min;min<=max;min++){
        result+=min;
    }
    }
    return result;
};

sumAll(1,4);

// Do not edit below this line
module.exports = sumAll;
