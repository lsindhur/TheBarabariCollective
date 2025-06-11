/*

https://blog.ioanatiplea.dev/core-javascript-primitive-vs-non-primitive-data-types#heading-object

*/
//example string 
/* let name = 'sindhura';
console.log(name[0]); //?? //s

name[0] = "c";
console.log(name); //sindhura */

//string is a primitive datat type
//primitives can't be changed once created






//Strings are primitives, and all primitives in JavaScript are immutable.
//That means: once a string is created, you cannot change individual characters.
//When you try name[0] = "c", JavaScript silently ignores it — 
// it doesn’t throw an error, but it does nothing.







//bt you must be wondering, we change values all the time;

//example

/* name = "sahana";
console.log(name); //sahana */

//sindhura //sahana












// You didn't change the string itself — you changed what the variable name points to.


//The original string "sindhura" is still sitting in memory (temporarily) 
// but name no longer stores it. Since no variable is using it anymore,
//  JavaScript's garbage collector will clean it up eventually.





//now lets look at at example of an array

//example //mutation vs reassignment
//is this called object mutability?

/* let arr = [1,2,3]; //cleans up by GC
//arr[0] = 22; //[ 22, 2, 3 ] //in the same location where array is stored value gets updated
arr = [22,2,3] //[ 22, 2, 3 ] //in a different location, new array is stored
console.log(arr); */


let name = "Rehan";
let newName = name; //rehan
console.log(newName); //rehan


newName = 'Faizan';
console.log(newName); //faizan

//what will  be the value of name??? //rehan //faizan


let arr1 = [1,2,3]
let arr2 = arr1 //both share same reference to the memory address //same link

/* arr1[0] = 2 //original array gets mutated //same location only value updated
console.log(arr1); //[2,2,3]
console.log(arr2); //[2,2,3] */

arr1 = [2,2,3]; //what happens when we reassign?? //location also changes
console.log(arr1); //[2,2,3]
console.log(arr2); //[1,2,3]



 











//No — this is not object mutability.
//This is reassignment, just like you did with strings.


//reassignment means pointing the variable to a completely new object. 



