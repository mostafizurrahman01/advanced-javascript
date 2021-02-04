//ekta function theke arekta function ke call or return korle seta ekta closed enviroment create kore fele.
// eta k jodi amra bahir theke kono ekta variable er maddhome call kori tahole tara tader nijeder moddhe 
// kichu value rakhbe. joto gula variable create korbo otogula variable tader moddhe value rakhbe and jotobar function 
// call korbo totobar value increase hobe.

function stopWatch(){
    let count = 0;
    return function(){
        count++;
        return count;
    }
}

const clock1 = stopWatch();
// console.log(clock1);
console.log(clock1());
console.log(clock1());
console.log(clock1());
console.log(clock1());

const clock2 = stopWatch();
console.log(clock2());
console.log(clock2());
console.log(clock1());
console.log(clock1());
console.log(clock2());