const fibonacci = function(num) {
    /*let fiboNum = Number(num);
    if(fiboNum<0){
        return 'OOPS';
    }else if (!isNaN(fiboNum)){
        if(fiboNum <2){
            return fiboNum;
        }
        return fibonacci(fiboNum-1) + fibonacci(fiboNum-2);
    }else{
        return 'This is not a number';
    }*/
    //*******************************//
    //Fibonacci with for loop
    
    let fiboNum = Number(num);
    if(fiboNum<0){
        return 'OOPS';
    }else if (!isNaN(fiboNum)){
        let a=0
        let b=1
        let c=fiboNum
        for (let i = 2;i<=fiboNum;i++){
            c=a+b;
            a=b;
            b=c;
        }
        return c;
    }else{
        return 'This is not a number';
    }
};

// Do not edit below this line
module.exports = fibonacci;
