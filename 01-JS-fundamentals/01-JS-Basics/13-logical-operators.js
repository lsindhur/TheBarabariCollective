//what are logical operators

//we use them to make decisiions based on multiple conditions


//logical AND, OR , !







//logical AND 
//returns true only if both conditions are true

let age = 20;
console.log(age>=18 && age<=22); //true && true //true





console.log(true && false); //false
console.log(true && true); //true
console.log(false && false); //false
console.log(false && true); //false












//logical OR
//returns true if at least one condition is true;
let isAdmin = false;
let isOwner = true;
console.log(isAdmin || isOwner)  //true

console.log(true || false); //true
console.log(false || true); //true
console.log(false || false);//false
console.log( true || true);//true
 











//logical NOT
//reverses the value of a condition

let loggedIn = true;
console.log(!loggedIn); //false

