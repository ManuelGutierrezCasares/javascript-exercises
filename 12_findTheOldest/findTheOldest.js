const findTheOldest = function(array) {
    let oldest = [];
    let today = new Date();
    let year = today.getFullYear();
    for(let i = 0;i<array.length;i++){
        if (i === 0){
            oldest=array[i];
            if(!array[i]['yearOfDeath']){
                oldest['yearOfDeath'] = year; 
            }
        }else if(!array[i]['yearOfDeath']){
            array[i]['yearOfDeath'] = year;
            if(array[i]['name']===oldest['name']){
                oldest['yearOfDeath'] = year;
            }
        }
        if((array[i]['yearOfDeath']-array[i]['yearOfBirth'])>(oldest['yearOfDeath']-oldest['yearOfBirth'])){
            oldest = array[i];
        }
    }
    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
