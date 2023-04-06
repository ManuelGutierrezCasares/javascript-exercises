const removeFromArray = function(arr,...item) {

    let itemSorted = item.sort();
    let newArr = [];
    for(let j=0;j<itemSorted.length;j++){
        for (i of arr){
            if (i !== itemSorted[j] && itemSorted[j] === itemSorted[0]){
                newArr.push(i);
            }else if (newArr.indexOf(itemSorted[j])>=0){
                newArr.splice(newArr.indexOf(itemSorted[j]),1);
            }else{
                continue;
            }
        }
    }
    return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
