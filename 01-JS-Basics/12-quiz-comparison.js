//guess the output
//ascii 

let a = 5;
//console.log(a == "5"); //true

let b = 5;
//console.log(b === "5"); //false //number 5 to string 5

let x = "10";  
let y = 10;
//console.log(x != y);  //false //number to number //is number 10 not equal to number 10
//console.log(x !== y);  //is string 10 not equal to number 10?? //true

let z = 10; 
//console.log(z = 5); //5 //not a comparison operator

console.log("12" > "2"); //false //
console.log("2">"12");//true
console.log("23">"22"); //true
//how do you know string 12 is not greater than string 2??
//string 2 is greater than string 12
//console.log(12>2); //true

//if we are comparing number and number, good, no complication
//if we are comparing string and number, it implicitly converts the string data type
//into number data type
//if we are comparing two strings, what will happen??
//will compare character by character
//the strings can be something like
//is "13" > "12"
//are "appeals" > "bananas"

console.log("bananas">"apples") //true

console.log("apple">"Banana"); //true //why??? //ascii

//127
//lower case alphabet
//upper case alphabet
//0 to 9
//special character
//a woulld have an ascii value
//A would also have an ascii value








//lexicographical comparison //when both are strings

/* console.log(5 < "6"); 

console.log("abc" < 5); 

let s = 5;
console.log(s != "5");   
console.log(s !== "5"); */