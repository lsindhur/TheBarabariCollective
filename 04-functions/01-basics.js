//explanation
//activity


//A function is a block of code designed to perform a specific action
//you can define it once and reuse it multiple times








//this is the function syntax 
/*

function name(parameter1, parameter2, parameter3) {
  // code to be executed
}

*/



//lets write a function

// program to say hello
//Two stages
//you define the function to perform that specific task
//and invoke/call it multiple time to repeat the same action


//function without params
/* function sayHello() {
  console.log('Hello!')
} */

/* sayHello();
sayHello();
sayHello();
sayHello(); */







//function with params/default

/* function sayHello(name="JohnDoe") {
  console.log(`Hello ${name}`);
}

sayHello();
sayHello(); */








//function arguments are the values received by the function when it is invoked
//Function parameters are the variables listed in the function definition







//activity1
//Write a function called `welcomeUser` that takes 2 parameters: name and age
//It should print a message like: "Welcome Alice! You are 25 years old."

function greetUser(name,age) {
  console.log(`Hello ${name}. You are ${age} years old`);
}

greetUser('Lakshmi',18)












//A function to calculate area of a rectangle (length and breadth as parameters)
/////It should print a message like: "The area of the rectangle is 120 cm."

function getArea(length,breadth) {
  let area = length * breadth;
  console.log(`The area of the rectangle is ${area} cm`)
}

getArea(3,5);




