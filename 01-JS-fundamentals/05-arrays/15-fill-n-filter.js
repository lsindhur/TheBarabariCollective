//fill -> replace everything with one value, modifies the original array
//filter -> returns the values which match the condition in a new array

//fill syntax

//array.fill(value, start, end)

const fruits = ["apple","orange","banana"];

//example 1
//fruits.fill("berry",1,2) //
//console.log(fruits); 



//example 2
//fruits.fill("berry"); //??
//console.log(fruits); 






//filter
//syntax
//array.filter(callback)

const scores = [45,75,56,82];
//filter all the values which are above 50

/* function isPass(score) {    
    return score>50;
} */



const passMarks = scores.filter((score) => score>50);
console.log(passMarks);





//filter expects a call back function which returns true for items that need to be stored










