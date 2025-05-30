//lets see how js reads code before running it


//what do you think happens when I print a variable before I declare it??

console.log(stream);  //BCA //not defined //undefined //error 
//Cannot access 'stream' before initialization

var stream = "BCA"; 




//what do you think happens when I invoke a function before I define it??

greetAll();  //hello all //error //undefined

function greetAll() {
    console.log('Hello all!')
}
 







//to understand this behaviour, we need to understand the default behaviour of JS

//JS has execution context which has two phases


//memory allocation phase

//-js scans the code and reserves memory for variable declarations and function declarations
//this is called hoisting

//variables
// Variables declared with `let` and `const` are hoisted but NOT initialized.
// They exist in a "Temporal Dead Zone" (TDZ) from the start of their scope
// until the declaration line is executed.
// Accessing them before declaration causes a ReferenceError.





//functions
// Function declarations are fully hoisted — their entire definition is moved
// to the top of the execution context during the memory allocation phase.
// This means you can call them before their place in the source code.



//execution phase
//-it runs the code line by line



//summary
// 1. Memory Allocation Phase:
//    - JS scans the code and reserves memory for:
//       • Variable declarations (but does not assign values yet)
//       • Function declarations (the whole function is stored in memory)
//    - This process is called **Hoisting**.

// 2. Execution Phase:
//    - JS runs the code line by line.


//The Temporal Dead Zone is the gap between when the variable is hoisted (during memory phase) and when it is declared (during execution).
//They're in a Temporal Dead Zone (TDZ) from the start of the scope until their declaration line.
