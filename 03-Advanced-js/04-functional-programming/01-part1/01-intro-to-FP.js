//different programming paradims
//what are programming paradims
/*

1. Imperative programming
2. Functional programming
3. Objected oriented programming

*/

//problem solving 


//problem - Square all numbers in an array called numbers = [1,2,3,4,5]
// and keep only even even square numbers in a new array 
// called result.

//imperative style
//use loops to solvve the problem
/* 
let numbers = [1,2,3,4,5]
 let result = []

for(let i=0; i<numbers.length; i++ ) {
    let square = numbers[i] * numbers[i]
        if(square%2 ===0){
            result.push(square)
        }
       
}  */














/* Imperative means we explain step-by-step HOW to do the task.
//We use loops and instructions to tell the computer what to do. */














//functional style

//we are going to use functions as the main building blocks of
//  our program.
//You describe what transformation you want, 
// and let functions handle the “how.”

//for example, for squaring we can use map instead of for loop and for filtering sqaure numbers, we can use filter method
//this way code is much shorter and hence easier to debug as well


//solve the same problem using map and filter
let numbers = [1,2,3,4,5]
let results = numbers
            .map(number => number * number)
            .filter(square => square%2 === 0)
console.log(results) 


/* let evenSquares = numbers.map(number => number * number).filter(number => number%2 === 0) */
/* console.log(evenSquares) */









//how to identify functional Programming code when you look at someone else's code

//Use of built-in higher-order functions like map, filter, reduce.
//Pure functions → no external dependencies, just input → output.
//No for/while loops for data transformations → replaced by function calls.
//Chaining / composition of functions instead of writing long step-by-step instructions.


/*
1. Function Chaining

You call methods one after the other on the same value (usually an object or array).

The output of one method becomes the input of the next automatically.

Common in JavaScript with array methods (map, filter, reduce)

*/


/*
2. Functional composition

Functional composition in JavaScript is the process of 

combining multiple functions together to build a new function, 

where the output of one function becomes the input of the next.
*/


//create a function that adds 5 to the number
//create another function that doubles a number

//use functional composition to add 5 and double the number

/* function add5(num) {
    return num+5
}

function double(num) {
    return num*2
}


double(add5(20)); */



//Analogy

/* Imperative → telling a friend step by step how to make tea (boil water, add tea leaves, pour, strain, add sugar).

Functional → saying “Make me tea.” The recipe is already built into the function. */



//object oriented programming

// Step 1: Create a class called Processor
// Step 2: Add a constructor that stores the array of numbers
// Step 3: Create one method to square all numbers
// Step 4: Create one method to keep only even numbers
// Step 5: Create one method (process) that calls the other two methods 
// in order
// Step 6: Create a new object from the class, and 
// call process() on it to get even sqaure numbers array //[4,16]

class Processor {
    constructor(numbers) {
        this.numbers = numbers
    }

    isSquares() {
        return this.numbers.map(num => num*num)
    }

    isEven(arr) {
        return arr.filter(ele => ele%2 === 0)
    }

    process() {
        return this.isEven(this.isSquares())
    }
}

const resultObj = new Processor([1,2,3,4,5])
console.log(resultObj)

const resultArr = resultObj.process()
console.log(resultArr)





















/* let numbers = [1, 2, 3, 4, 5];
let result = []

for(let i=0; i<numbers.length; i++) {
    const squared = numbers[i] *= numbers[i] 
    //console.log(`Value of numbers[${i}] = ${squared} `)
    if(squared%2 === 0) {
        result.push(squared)
    }
    
}

console.log(result);
 */



/* let numbers = [1,2,3,4,5]

let result = numbers
.map(n => n*2)
.filter(n => n%2 === 0)
console.log(result)
 */

/* class processor {
    constructor(numbers) {
        this.numbers = numbers
    }

    isSquare() {
        return this.numbers.map(num => num*num)
    }

    isEven(arr) {
        return arr.filter(num => num%2 === 0)
    }

    process() {
        const squared = this.isSquare()
        return this.isEven(squared)
    }
}

const resultObj = new processor([1,2,3,4,5])
console.log(resultObj.process())  */