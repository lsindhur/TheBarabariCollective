/* console.log(city); // ??error - not initialized

let city = "Delhi"; 

console.log(city);  */


//output?? //undefined //error
//explanation??










//var is hoisted and initialized with undefined value


/* console.log(course);  //error

let course = "Web Development"; */

//output??
//explanation??




//(Explanation: let is hoisted but not initialized — TDZ error.)




/* greet(); // because entire function definition is hoisted

function greet() {
  console.log("Good morning!");
}  */


//output??
//explanation??



//(Explanation: Function declarations are hoisted completely.)




/* var language = "JavaScript";

function test() {
  console.log(language); // ?? javascript //undefined due to hositing //
  var language = "Python";
  console.log(language); // ??python
}

test();   */





//output??
//explanation??



//Explanation: Inside the function, var language is hoisted to the top of the function scope
// , shadowing the outer variable. It's undefined at first, then assigned "Python".





/* var language = "JavaScript";

function test() {
  console.log(language); // ??undefined //javascript 
  
}

test();  */



//output??
//explanation??


//This is because of lexical scope in JavaScript. 
// Functions have access to variables in their outer scope — the scope in which they were defined.
//There’s no language defined locally in the test function, 
// so it “reaches out” to the global scope and finds it.




/* let language = "JavaScript";

function test() {
  console.log(language); // undefined //javascript //error //
  let language = "python"
}

test();   */


//output??
//explanation??




//language is declared using let in the global scope.

//The function test() is also defined in the global scope.

//When test() runs, it executes console.log(language).

//Because language is not declared inside the function, JavaScript looks outward to the enclosing scope (the global scope) and finds it.

//Since language has already been declared and initialized before test() is called, the value "JavaScript" is correctly logged.


  
test();  
var language;

function test() {
  console.log(language); // ??undefined //reference error
  
}




//output??
//explanation??


//This line declares a variable language using let, but does not assign it any value. So its value is undefined at this point.
//The function test refers to the language variable from the outer scope (global scope in this case), because there’s no local variable named language declared inside test.
//At the time of logging, language is declared but not initialized with any value. So it holds the value undefined.







/*  test();    

let language;

function test() {
  console.log(language); // ??
  
} */ 


  //output??
//explanation??




//Variables declared with let and const are not hoisted like var.

//They do get hoisted, but they are not initialized, 
// and are placed in a "temporal dead zone (TDZ)" from the start of the scope 
// until the declaration is encountered.

//You call test() before the let language; line has been reached.
///Inside the test() function, console.log(language) tries to access language.
//But language is still in the TDZ, so JavaScript throws a ReferenceError.