const palindromes = function (arg) {
    let regEx=/[a-z]/;
    arg = arg.toLowerCase();
    arg = arg.split("");
    let argForwards = [];
    let argBackwards = [];
    for (let i=0;i<arg.length;i++){
        if(regEx.test(arg[i])){
            argForwards.push(arg[i]);
        }
    }
    for(let i=argForwards.length;i>0;i--){
        argBackwards.push(argForwards[i-1]);
    }
    argForwards = argForwards.toString();
    argBackwards = argBackwards.toString();
    if(argForwards === argBackwards){
        return true;
    }else{
        return false
    }

};

// Do not edit below this line
module.exports = palindromes;
