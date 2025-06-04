//so what happens when I write

let name = "sindhu";

console.log(typeof name);  //string

let marks = 45;

console.log(typeof marks); //number

let isLoggedIn = true;

console.log(typeof isLoggedIn);  //boolean



let arr = [1,2,3,4];

console.log(typeof arr); //?? object

let cup = {
    color:"black",
    size:200,
    shape:"square",
    material:"ceramic",
    origin:"India"
}

const fruits = ["banana","orange","melon"];

/*
fruits = {
0:"banana",
1:"orange",
2:"melon",
length:3,
push
pop
other array methods
}

*/


console.log(Array.isArray(fruits));







//🧠 Explanation:
//Even though arr is clearly an array, typeof arr returns "object".
//This is because:
//Under the hood, arrays are actually special kinds of objects.


//how does a regular object look like 
//how does an array look like under the hood
//what is the correct way to check if something is an array



















//internally it is stored like this

/*

fruits = {
0:"apple",
1:"orange",
2:"banana",
length:3,
//and a bunch of array methods which only work on arrays
}


//so technically arrays are objects just with special behaviour

*/

//How to properly check for arrays:

/* console.log(Array.isArray(arr)); */

//This is the recommended way to check if a variable is actually an array.
