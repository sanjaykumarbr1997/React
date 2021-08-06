import emojipedia from "./emojipedia";
var numbers = [3, 56, 2, 48, 5];
//Map -Create a new array by doing something with each item in an array.

//Filter - Create a new array by keeping the items that return true.

//Reduce - Accumulate a value by doing something to each item in an array.

//Find - find the first item that matches from an array.

//FindIndex - find the index of the first item that matches.


//MAP
function double(x){
    return x*2;
}
var newNumb =numbers.map(double);
console.log(newNumb);


// this is more consice 
var newNu =numbers.map(function (x){
    return x*2;
});
console.log(newNu);


var rNumb =[];
function doublee(x){
     rNumb.push(x*2);
}
numbers.forEach(doublee);
console.log(rNumb);



var rNumber =[];
numbers.forEach(function(x){
    rNumber.push(x*2);
})
console.log(rNumber);


//FILTER
var numbers = [3, 56, 2, 48, 5];

var newRs = numbers.filter(function(x){
    return x>10;
});
console.log(newRs);

//REDUCE
var nNNumber =numbers.reduce(function(accumulator,currentNumber){
    return accumulator +currentNumber;
})
console.log(nNNumber);

//FIND

var lar = numbers.find(function(num){
    return num>50;
})
console.log(lar);

//FIND INDEX
var ind = numbers.findIndex(function(num){
    return num>50;
})
console.log(ind);

const newEmojArray =emojipedia.map(function(emojiEntry){
    return emojiEntry.meaning.substring(0,100);
})
console.log(newEmojArray);

