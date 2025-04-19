//implicit type conversion
//explicit type conversion
//difference

//let x = "4" + 5;
//console.log(x); //?? //45;


//what happened?? 
//number 5 is converted to string 5

//when you perform an operation, be it adddition, subraction, multiplicaon etcc
//all the operands should be of same type
//when they are not the same type, behind the scenes, your JS is making a decison
//in this case, it had two options::
// convert 5 into string;
//convert 4 into number;

//here it is converting 5 into string;

let myName = "Sindhura";
//console.log(myName);//sindhura
//My name is Sindhura

//console.log("my name is "+myName);

//when you use * + * operator, your JS thinks you are trying to join things together which is "concatenate"


//hey, let me convert 5 into a string!! 
//taking a decision on its own
//implicit type conversion

let x = Number("4") + 5;
console.log(x) //

//explicit type conversion




///now can anyone explain the difference between implicit and explicit conversion??
// So, the main difference:
// - Implicit conversion: JavaScript decides how to convert behind the scenes
// - Explicit conversion: YOU tell JavaScript how to convert



