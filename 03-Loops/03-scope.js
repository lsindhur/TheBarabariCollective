//lets move to a new concept called scope in JS
//scope refers to where a variable or a function can be accessed in your code

//different kinds of scope :

//global scope - Accessible from anywhere in the code.
//Function scope - Not accessible outside the function.
//Block Scope - Variables declared inside a block {} are only accessible within that block.
//Lexical Scope - will be introduced when functions topic is introduced




//for example //block scope

/*  for(let i=0; i<5; i++) {
    const name = "Sindhura"
    console.log(i);
}  */

//console.log(i);

//what do you think will happen??



//the variable i is scoped to the block of the for loop








//a variable declared using let or const inside a block of code can not be
//accessed from outside









//so what exactly is a block??
//The block can be a loop, an if statement, or any section of code between {}.



//what do you think will be the output?? 









//now lets just declare it globally
/* 
let name = "Sindhura"; */
//console.log("Sindhura");

//so let is a block or function scoped variable and can't be accessed from outside
//same rule applies to const



//now what about var?
//although we won't be using var much, I would still like you to know
//about the scope of var because it is an important interview question

//Important: var does NOT have block scope — but it DOES have global scope and function scope

//example
//what changed from previous example? what will be the output?
for(var i=0; i<5; i++) {
    //console.log(i);
}




//console.log(i);




const batch = 'BCA';

{batch='AI ML'
    console.log(batch);
}







 //accessible outside the block because var doesn't respect block scope

// Even though `i` was declared inside the for loop block,
// it's still accessible outside because `var` ignores block scope



/*Key Takeaway for Students:
let and const are block scoped a → variables declared inside {} are not accessible outside.
let and const are also function scoped -> variables declared inside functions are not accessible outside

var is not block scoped, but global scoped or function scoped
*/






