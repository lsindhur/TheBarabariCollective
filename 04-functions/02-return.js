// return vs console.log
//storing return value in a variable
//function exit after return
// activity

// Until now we were simply printing the value inside the function,
// but not using that value anywhere else.

// For example:
//calculate area of rectangle //output should be something like
//area of the rectangle is 120 cm.





/* function areaOfRectangle(length,breadth) {
    let area = length * breadth;
    console.log(`Area of the rectangle is ${area} cm`)
}  */

/* areaOfRectangle(5,4) */


// ❓ But where are we storing or using this value? Nowhere!

// 👉 Enter the `return` keyword

// The `return` statement is used in a function when you want the
// value to be stored somewhere
// So that you can store it, log it, or use it in further calculations.

// Let's rewrite the area function using `return`


function getArea(length,breadth) {
    return length*breadth;
}

//console.log(getArea(4,5));

const area1 = getArea(4,5)
console.log(area1) //20
const area2 = getArea(1,2)
console.log(area2) //2






//invoke the function





// 🔴 Important:
// Once a `return` statement runs, the function exits immediately
// Any code written after `return` is ignored

//example

function greetUser() {
    return "hello";
    console.log("hyderabad");
}

console.log(greetUser())









// ✅ Summary:
// - Use `console.log()` when you want to show the output immediately
// - Use `return` when you want to send the value back and use it later







// Activity:
// Function: convert Celsius to Fahrenheit
//you need to give temp in celsius as argument and your function should return tem in fahrenheit
// Formula: (Celsius × (9/5)) + 32 = Fahrenheit 

function tempinF(cel) {
    const fheit =  (cel*(9/5))+32;
    return fheit
}

console.log(tempinF(32))
















